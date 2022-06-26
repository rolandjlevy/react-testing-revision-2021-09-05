import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, updateTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd(e);
    }
  }

  const handleAdd = (e) => {
    const newTodo = { todo, id: uuidv4() };
    updateTodos([...todos, newTodo]);
    setTodo('');
    e.target.focus();
  }

  const handleRemove = (id) => {
    const filteredTodos = todos.filter(item => item.id !== id);
    updateTodos([...filteredTodos]);
  }

  return (
    <main className="App">
      <h3>List maker</h3>
      
      <input 
        type="text" 
        value={todo} 
        aria-label="description"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Description..."
      />
      
      <button 
        onClick={(e) => handleAdd(e)} 
        className="add" 
        disabled={!todo.length}
      >
        Add
      </button>
      
      {todos.length ? 
        (<ul className="todos"> 
          {(todos.map(({ id, todo }) => (
            <Todo 
              key={id} 
              id={id} 
              description={todo} 
              handleRemove={() => handleRemove(id)} 
            />
            ))
          )}
        </ul>) : <p>No items found</p>
      }
      
    </main>
  );
}

export default App;