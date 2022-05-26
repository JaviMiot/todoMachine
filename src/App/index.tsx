import React from 'react';

import { useTodos } from '../hooks/useTodos';

import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { InputTodo } from '../components/InputTodo';
import { Modal } from '../components/Modal';
import { ChangeAlertWithStorageListener } from '../components/ChangeAlert';
import { ModalAddTodo } from '../components/Modal/ModalAddTodo';

import { Todo } from '../models/todo.model';

import './App.scss';

function App() {
  const {
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
    searchText,
    sincronizeTodos,
  } = useTodos();

  return (
    <div className='App'>
      <div className='todoAdd-container'>
        <InputTodo onChange={onChange} value={todoNew.text} />
        <CreateTodoButton onClick={addTodo} />
        <button
          style={{ marginLeft: '8px' }}
          onClick={() => SetOpenModal(true)}
        >
          M
        </button>
        {isOpenModal && (
          <Modal>
            <ModalAddTodo
              onChange={onChange}
              todoNew={todoNew}
              addTodo={addTodo}
              SetOpenModal={SetOpenModal}
            />
          </Modal>
        )}
      </div>

      <div className='search-container'>
        <TodoHeader enabled={true}>
          <TodoCounter
            todosCompleted={todosCompleted}
            totalTodos={totalTodos}
          />
          <TodoSearch timeout={700} handleSearch={handleSearch} />
        </TodoHeader>

        <TodoList
          empty={totalTodos === 0}
          searchTodos={todosSearch}
          searchText={searchText}
          onEmpty={() => <p>create a task pls</p>}
          onEmptySearch={(search: string) => <p>task don't find {search}</p>}
        >
          {(todo: Todo, index: number) => (
            <TodoItem
              key={index}
              todo={todo}
              changeTodoState={changeTodoState}
              deleteTodo={deleteTodo}
            />
          )}
        </TodoList>

        <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
      </div>
    </div>
  );
}

export default App;
