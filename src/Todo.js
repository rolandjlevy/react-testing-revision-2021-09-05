import React from 'react';

const Todo = ({ description, id, remove }) => {
  const handleClick = () => {
    remove(id);
  }
  return (
    <li className="todo" id={id}>
      <span className="description">{description}</span>
      <span onClick={handleClick} className="remove" aria-labelledby="remove-btn">
        <span>&times;</span>
      </span>
    </li>
  )
}

export default Todo;