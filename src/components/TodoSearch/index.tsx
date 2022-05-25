import React from 'react';

import debounce from 'lodash/debounce';

import { TodoContextProps } from '../../hooks/useTodos';

type TodoSearchProps = {
  timeout?: number;
  handleSearch: TodoContextProps['handleSearch'];
  enabled?: boolean;
};

const style = (enabled: boolean) => ({
  opacity: enabled ? '1' : '0.2',
});

export const TodoSearch: React.FC<TodoSearchProps> = ({
  timeout = 1000,
  handleSearch,
  enabled = true,
}) => {
  return (
    <input
      style={style(enabled)}
      type='text'
      placeholder='search'
      onChange={debounce(handleSearch, timeout)}
    />
  );
};
