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
      add(e);
    }
  }

  const add = (e) => {
    const newTodo = { todo, id: uuidv4() };
    updateTodos([...todos, newTodo]);
    setTodo('');
    e.target.focus();
  }

  const remove = (id) => {
    const filteredTodos = todos.filter(item => item.id !== id);
    updateTodos([...filteredTodos]);
  }

  return (
    <div className="App">
      <h3>List maker</h3>
      <input 
        type="text" 
        value={todo} 
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Description..."
      />
      <button 
        onClick={(e) => add(e)} 
        className="add" 
        disabled={!todo.length}
      >
        Add
      </button>
      
      {todos.length ? 
        (<ul className="todos"> 
          {(todos.map(item => (
            <Todo 
              description={item.todo} 
              id={item.id} 
              remove={() => remove(item.id)} 
              key={item.id} 
            />
            ))
          )}
        </ul>) : <p>No list items</p>
      }
      
    </div>
  );
}

export default App;