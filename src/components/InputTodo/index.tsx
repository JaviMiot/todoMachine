import React from 'react';

type InputTodoProps = {
  onChange: (text: string) => void;
  value: string;
};

export const InputTodo: React.FC<InputTodoProps> = ({ onChange, value }) => {
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <input
      type='text'
      placeholder='Add new todo'
      onChange={handleOnchange}
      value={value}
    />
  );
};
