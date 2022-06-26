import React from 'react';

const Todo = ({ description, id, handleRemove }) => (
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