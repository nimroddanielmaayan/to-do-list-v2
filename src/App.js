import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const updateTodo = (index, value) => {
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="text"
              value={todo}
              onChange={(e) => updateTodo(index, e.target.value)}
            />
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
