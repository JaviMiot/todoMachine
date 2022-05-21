import React from 'react';

type TodoListProps = {
  children: React.ReactNode;
};

export const TodoList: React.FC<TodoListProps> = ({ children }) => {
  return <ul style={{ width: '100%' }}>{children}</ul>;
};
