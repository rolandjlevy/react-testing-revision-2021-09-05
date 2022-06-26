import React from 'react';

const Todo = ({ id, description, handleRemove }) => (
  <li className="todo" id={id}>
    <span className="description">{description}</span>
    <span 
      onClick={() => handleRemove(id)} 
      aria-label="remove-btn"
      className="remove" 
    >
      <span>&times;</span>
    </span>
  </li>
);

export default Todo;