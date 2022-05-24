import React from 'react';

type TodoHeaderProps = {
  children: React.ReactNode;
};

export const TodoHeader: React.FC<TodoHeaderProps> = ({ children }) => {
  return <header>{children}</header>;
};
