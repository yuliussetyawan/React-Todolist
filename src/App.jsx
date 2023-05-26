import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodos = (title) => {
    // use currentTodos to add another item without overwriting it
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          // changing only one property on it
          return { ...todo, completed };
        }
        // if not matches with current id, return it with no changes at all
        return todo;
      });
    });
  };
  const handleDelete = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm addTodos={addTodos} />
      <h1 className="header">To do List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
