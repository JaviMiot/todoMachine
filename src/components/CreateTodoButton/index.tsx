import React from 'react';

type CreateTodoButtonProps = {
  onClick: () => void;
};

export const CreateTodoButton: React.FC<CreateTodoButtonProps> = ({
  onClick,
}) => {
  return <button onClick={onClick}>+</button>;
};
