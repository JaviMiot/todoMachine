import React, { useContext } from 'react';

import debounce from 'lodash/debounce';
import { TodoContext } from '../../TodoContext';

type TodoSearchProps = {
  timeout?: number;
};

export const TodoSearch: React.FC<TodoSearchProps> = ({ timeout = 1000 }) => {
  const ctx = useContext(TodoContext);
  return (
    <input
      type='text'
      placeholder='search'
      onChange={debounce(ctx?.handleSearch, timeout)}
    />
  );
};
