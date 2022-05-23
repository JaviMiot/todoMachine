import React, { createContext, useState } from 'react';

import { Todo } from '../models/todo.model';

import { useLocalStorageArray } from '../hooks/useLocalStorageArray';

type TodoContextProps = {
  onChange: any;
  addTodo: any;
  totalTodos: number;
  todosCompleted: number;
  handleSearch: any;
  todosSearch: Array<Todo>;
  changeTodoState: any;
  deleteTodo: any;
  todoNew: any;
};

export const TodoContext = createContext<TodoContextProps | null>(null);

type TodoProviderProps = {
  children: React.ReactNode;
};

const initTodos: Todo[] = [];
const initTodo: Todo = { id: 0, text: '', completed: false };
const localStorageVersion = 'TODOS_V1';

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
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

  const value: TodoContextProps = {
    onChange,
    addTodo,
    totalTodos,
    todosCompleted,
    handleSearch,
    todosSearch,
    changeTodoState,
    deleteTodo,
    todoNew,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
