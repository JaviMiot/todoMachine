import React, { useContext } from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { InputTodo } from '../components/InputTodo';

import { TodoContext } from '../TodoContext';

export const AppUi = () => {
  const ctx = useContext(TodoContext);
  return (
    <>
      <div className='todoAdd-container'>
        <InputTodo onChange={ctx?.onChange} value={ctx?.todoNew.text} />
        <CreateTodoButton onClick={ctx?.addTodo} />
      </div>

      <div className='search-container'>
        <TodoCounter />
        <TodoSearch timeout={700} />

        <TodoList>
          {ctx?.todosSearch.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              changeTodoState={ctx?.changeTodoState}
              deleteTodo={ctx?.deleteTodo}
            />
          ))}
        </TodoList>
      </div>
    </>
  );
};
