import React from "react";

const ToDoItem = ({id, completed, title, toggleTodo, handleDelete}) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
