import React from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { InputTodo } from '../components/InputTodo';

import { Todo } from '../models/todo.model';

type AppUIProps = {
  onChange: (todoText: string) => void;
  addTodo: () => void;
  totalTodos: number;
  todosCompleted: number;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todosSearch: Array<Todo>;
  changeTodoState: (id: Todo['id'], isCompleted: boolean) => void;
  deleteTodo: (id: Todo['id']) => void;
  todoNew: Todo;
};

export const AppUi: React.FC<AppUIProps> = ({
  onChange,
  addTodo,
  totalTodos,
  todosCompleted,
  handleSearch,
  todosSearch,
  changeTodoState,
  deleteTodo,
  todoNew,
}) => {
  return (
    <>
      <div className='todoAdd-container'>
        <InputTodo onChange={onChange} value={todoNew.text} />
        <CreateTodoButton onClick={addTodo} />
      </div>
      <div className='search-container'>
        <TodoCounter total={totalTodos} totalCompleted={todosCompleted} />
        <TodoSearch onChange={handleSearch} timeout={700} />
        <TodoList>
          {todosSearch.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              changeTodoState={changeTodoState}
              deleteTodo={deleteTodo}
            />
          ))}
        </TodoList>
      </div>
    </>
  );
};
