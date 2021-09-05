import React from 'react';

const Todo = ({ todo, id, remove }) => {
  const handleClick = () => {
    remove(id);
  }
  return (
    <p id={id}>{' '}{todo}{' '}<button onClick={handleClick} class="remove">&times;</button></p>
  )
}

export default Todo;