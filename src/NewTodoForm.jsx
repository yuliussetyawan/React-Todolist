import { useState } from "react";

const NewTodoForm = ({ addTodos }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    addTodos(newItem);
    setNewItem("");
  };
  return (
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
  );
};

export default NewTodoForm;
