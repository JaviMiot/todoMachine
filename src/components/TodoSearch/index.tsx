import React from 'react';

import debounce from 'lodash/debounce';

import { TodoContextProps } from '../../hooks/useTodos';

type TodoSearchProps = {
  timeout?: number;
  handleSearch: TodoContextProps['handleSearch'];
};

export const TodoSearch: React.FC<TodoSearchProps> = ({
  timeout = 1000,
  handleSearch,
}) => {
  return (
    <input
      type='text'
      placeholder='search'
      onChange={debounce(handleSearch, timeout)}
    />
  );
};
