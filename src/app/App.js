import React from 'react';
import Counter from './../counter/Counter';
import TodoList from './../todo-list/TodoList';

export default function App() {
  return (
    <div>
      <p>Counter:</p>
      <Counter />

      <p>Todo list:</p>
      <TodoList />
    </div>
  );
}
