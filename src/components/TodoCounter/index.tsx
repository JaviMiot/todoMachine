import React from 'react';

type TodoCounterProps = {
  todosCompleted: number;
  totalTodos: number;
};

export const TodoCounter: React.FC<TodoCounterProps> = ({
  todosCompleted,
  totalTodos,
}) => {
  return (
    <h2>
      Has completado {todosCompleted} de {totalTodos} TODOs
    </h2>
  );
};
