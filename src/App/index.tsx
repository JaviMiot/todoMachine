import React, { useState } from 'react';

import { AppUi } from './AppUi';

import { Todo } from '../models/todo.model';

import './App.scss';

const initData: Array<Todo> = [
  { id: 0, text: 'dormir', completed: false },
  { id: 1, text: 'pasear', completed: true },
  { id: 2, text: 'saltar', completed: false },
];

const initTodo: Todo = { id: 0, text: '', completed: false };

function App() {
  const [todos, setTodos] = useState<Array<Todo>>(initData);
  const [todoNew, setTodoNew] = useState<Todo>(initTodo);
  const [search, setSearch] = useState<string>('');

  const todosSearch = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const totalTodos = todosSearch.length;
  const todosCompleted = todosSearch.filter((todo) => !!todo.completed).length;

  const addTodo = () => {
    setTodos((todo) => {
      return todoNew.text !== '' ? [...todos, todoNew] : todo;
    });
    setTodoNew(initTodo);
  };

  const onChange = (todoText: string) => {
    setTodoNew({ ...todoNew, text: todoText, id: todos.length });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchData = event.target.value;
    setSearch(searchData);
  };

  const changeTodoState = (id: Todo['id'], isCompleted: boolean) => {
    let todoUpdate = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = isCompleted;
      }
      return todo;
    });

    setTodos(todoUpdate);
  };

  const deleteTodo = (id: Todo['id']) => {
    let deleteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodos);
  };

  return (
    <div className='App'>
      <AppUi
        onChange={onChange}
        addTodo={addTodo}
        totalTodos={totalTodos}
        todosCompleted={todosCompleted}
        handleSearch={handleSearch}
        todosSearch={todosSearch}
        changeTodoState={changeTodoState}
        deleteTodo={deleteTodo}
        todoNew={todoNew}
      />
    </div>
  );
}

export default App;
