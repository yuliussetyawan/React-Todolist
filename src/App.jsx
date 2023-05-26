import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // use currentTodos to add another item without overwriting it
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
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
    setTodos((currentTodos)=> {
      return currentTodos.filter((todo)=> todo.id !== id);
    })
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> New Item </label>
          <input
            id="item"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To do List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={()=>handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
