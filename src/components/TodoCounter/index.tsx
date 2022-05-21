import React from 'react';

type TodoCounterProps = {
  total: number;
  totalCompleted: number;
};

export const TodoCounter: React.FC<TodoCounterProps> = ({
  total,
  totalCompleted,
}) => {
  return (
    <h2>
      Has completado {totalCompleted} de {total} TODOs
    </h2>
  );
};
