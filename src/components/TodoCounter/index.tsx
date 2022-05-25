import React from 'react';

type TodoCounterProps = {
  todosCompleted: number;
  totalTodos: number;
  enabled?: boolean;
};

const style = (enabled: boolean) => ({
  opacity: enabled ? '1' : '0.2',
});

export const TodoCounter: React.FC<TodoCounterProps> = ({
  todosCompleted,
  totalTodos,
  enabled = true,
}) => {
  return (
    <h2 style={style(enabled)}>
      Has completado {todosCompleted} de {totalTodos} TODOs
    </h2>
  );
};
