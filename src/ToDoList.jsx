import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleTodo, handleDelete }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
         <ToDoItem {...todo} key={todo.id} toggleTodo={toggleTodo} handleDelete={handleDelete}/>
        );
      })}
    </ul>
  );
};

export default ToDoList;
