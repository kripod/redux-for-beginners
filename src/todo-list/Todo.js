import React, { PropTypes } from 'react'

// Define presentational component
export default function Todo({ id, text, isCompleted, onToggle, onRemove }) {
  return (
    <li>
      <button onClick={() => onRemove(id)}>X</button>
      <span> </span>
      <span
        style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
        onClick={() => onToggle(id)}
      >
        {text}
      </span>
    </li>
  );
}

// Validate prop types during development to catch possible errors
Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
