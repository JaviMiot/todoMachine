import React from 'react';

import { TodoCounter } from './TodoCounter';
import {Search} from '.'

import './index.css';

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Array<Todo> = [
  { text: 'dormir', completed: false },
  { text: 'pasear', completed: false },
  { text: 'saltar', completed: false },
];

function App() {
  return (
    <div className='App'>
      <TodoCounter />
      <TodoSearch />
      {/* 
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton /> */}
      {todos.map((todo) => (
        <p>{todo.text}</p>
      ))}
    </div>
  );
}

export default App;
