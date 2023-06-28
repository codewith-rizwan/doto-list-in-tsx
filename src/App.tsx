import React, { useState } from 'react';

import './style.css';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  function addHandler() {
    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
    <div className="todo">
      <h1>TODO</h1>
      <div>
        <input
          type="text"
          placeholder="TODOS"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addHandler}>ADD</button>
      </div>
      <ol>
        {todos.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ol>
    </div>
  );
}
