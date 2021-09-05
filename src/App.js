import React, { useState } from 'react';
import Todo from './Todo';

function App() {
  const [counter, incCounter] = useState(0);
  const [todo, setTodo] = useState('');
  const [todos, updageTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  const handleClick = () => {
    incCounter(counter + 1);
    const newTodo = {
      todo,
      id: counter
    }
    updageTodos([...todos, newTodo]);
  }
  const remove = (id) => {
    const newTodos = todos.filter(item => item.id !== id);
    updageTodos([...newTodos]);
  }
  return (
    <div className="App">
      <h3>Todo app</h3>
      <input 
        type="text" 
        value={todo} 
        placeholder="topic"
        onChange={handleChange}
      />
      <button onClick={handleClick} class="add" disabled={!todo.length} >Add</button>
      
      {todos.length ? todos.map(item => {
        return <Todo todo={item.todo} id={item.id} remove={() => remove(item.id)} key={item.id} />
      }) : ''}
      
    </div>
  );
}

export default App;