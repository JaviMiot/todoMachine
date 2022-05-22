import React, { useState } from 'react';

import { AppUi } from './AppUi';

import { Todo } from '../models/todo.model';

import { useLocalStorageArray } from '../hooks/useLocalStorageArray';

import './App.scss';

const initTodos: Todo[] = [];
const initTodo: Todo = { id: 0, text: '', completed: false };
const localStorageVersion = 'TODOS_V1';

function App() {
  const [todos, setTodos] = useLocalStorageArray<Todo>(
    localStorageVersion,
    initTodos
  );
  const [todoNew, setTodoNew] = useState<Todo>(initTodo);
  const [search, setSearch] = useState<string>('');

  const todosSearch = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const totalTodos = todosSearch.length;
  const todosCompleted = todosSearch.filter((todo) => !!todo.completed).length;

  const addTodo = () => {
    if (todoNew.text !== '') {
      saveTodos([...todos, todoNew]);
      setTodoNew(initTodo);
    }
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

    saveTodos(todoUpdate);
  };

  const deleteTodo = (id: Todo['id']) => {
    let deleteTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(deleteTodos);
  };

  const saveTodos = (todos: Todo[]) => {
    setTodos(todos);
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
