import React, { useContext } from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { InputTodo } from '../components/InputTodo';
import { Modal } from '../components/Modal';
import { TodoContext } from '../TodoContext';

export const AppUi = () => {
  const ctx = useContext(TodoContext);
  return (
    <>
      <div className='todoAdd-container'>
        <InputTodo onChange={ctx?.onChange} value={ctx?.todoNew.text} />
        <CreateTodoButton onClick={ctx?.addTodo} />
        <button
          style={{ marginLeft: '8px' }}
          onClick={() => ctx?.SetOpenModal(true)}
        >
          M
        </button>
        {ctx?.isOpenModal && (
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
              <InputTodo onChange={ctx?.onChange} value={ctx?.todoNew.text} />
              <div
                style={{
                  width: '100%',
                  marginTop: '24px',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <button onClick={ctx?.addTodo}>Accept</button>
                <button onClick={() => ctx?.SetOpenModal(false)}>Cancel</button>
              </div>
            </div>
          </Modal>
        )}
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
