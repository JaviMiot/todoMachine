import React from 'react';

import { InputTodo } from '../../InputTodo';

import { Todo } from '../../../models/todo.model';

type ModalAddTodoProps = {
  onChange: (text: string) => void;
  todoNew: Todo;
  addTodo: () => void;
  SetOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalAddTodo: React.FC<ModalAddTodoProps> = ({
  onChange,
  todoNew,
  addTodo,
  SetOpenModal,
}) => {
  const closeModal = () => SetOpenModal(false);
  const handleAccept = () => {
    addTodo();
    closeModal();
  };
  return (
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
        <button onClick={handleAccept}>Accept</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};
