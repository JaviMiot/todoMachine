import React from 'react';

type TodoHeaderProps = {
  children: React.ReactNode;
  enabled: boolean;
};

type childrenProps = {
  enabled: boolean;
};

export const TodoHeader: React.FC<TodoHeaderProps> = ({
  children,
  enabled,
}) => {
  const childrenClone = React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement<childrenProps>, {
      enabled,
    });
  });

  return <header>{childrenClone}</header>;
};
