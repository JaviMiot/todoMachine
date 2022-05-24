import React, { createContext, useState } from 'react';

import { Todo } from '../models/todo.model';

import { useLocalStorageArray } from './useLocalStorageArray';

export type TodoContextProps = {
  onChange: (todoText: string) => void;
  addTodo: () => void;
  totalTodos: number;
  todosCompleted: number;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todosSearch: Array<Todo>;
  changeTodoState: any;
  deleteTodo: (id: Todo['id']) => void;
  todoNew: any;
  isOpenModal: boolean;
  SetOpenModal: any;
};

const initTodos: Todo[] = [];
const initTodo: Todo = { id: 0, text: '', completed: false };
const localStorageVersion = 'TODOS_V1';

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorageArray<Todo>(
    localStorageVersion,
    initTodos
  );
  const [todoNew, setTodoNew] = useState<Todo>(initTodo);
  const [search, setSearch] = useState<string>('');
  const [isOpenModal, SetOpenModal] = useState<boolean>(false);

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

  return {
    onChange,
    addTodo,
    totalTodos,
    todosCompleted,
    handleSearch,
    todosSearch,
    changeTodoState,
    deleteTodo,
    todoNew,
    isOpenModal,
    SetOpenModal,
  };
};
