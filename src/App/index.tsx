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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '25px 15px',
                border: '1px solid gray',
                borderRadius: '8px',
                width: '300px',
                height: '200px',
                backgroundColor: 'white',
                boxShadow: '1px 3px 5px rgba(17, 16, 16, 0.5)',
              }}
            >
              <p style={{ marginBottom: '16px' }}>Add new task</p>
              <InputTodo onChange={onChange} value={todoNew.text} />
              <div
                style={{
                  width: '100%',
                  marginTop: '24px',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <button onClick={addTodo}>Accept</button>
                <button onClick={() => SetOpenModal(false)}>Cancel</button>
              </div>
            </div>
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
