import React from 'react';

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { Todo } from '../../models/todo.model';

const style = {
  button: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
};

type TodoItemProps = {
  todo: Todo;
  changeTodoState: (id: Todo['id'], isCompleted: boolean) => void;
  deleteTodo: (id: Todo['id']) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  changeTodoState,
  deleteTodo,
}) => {
  const changeState = () => {
    changeTodoState(todo.id, !todo.completed);
  };

  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button style={style.button} onClick={changeState}>
        {todo.completed ? (
          <CheckCircleRoundedIcon color='success' fontSize='large' />
        ) : (
          <RadioButtonCheckedRoundedIcon color='secondary' fontSize='large' />
        )}
      </button>
      <p
        onClick={changeState}
        style={{
          paddingLeft: '8px',
          width: '100%',
          textDecoration: todo.completed ? 'line-through' : '',
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </p>
      <button style={style.button} onClick={() => deleteTodo(todo.id)}>
        <DeleteOutlineRoundedIcon fontSize='large' />
      </button>
    </li>
  );
};
