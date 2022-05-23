import React, { useContext } from 'react';

import { TodoContext } from '../../TodoContext';

export const TodoCounter = () => {
  const ctx = useContext(TodoContext);
  return (
    <h2>
      Has completado {ctx?.todosCompleted} de {ctx?.totalTodos} TODOs
    </h2>
  );
};
