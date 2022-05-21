import React from 'react';

import debounce from 'lodash/debounce';

type TodoSearchProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  timeout?: number;
};

export const TodoSearch: React.FC<TodoSearchProps> = ({
  onChange,
  timeout = 1000,
}) => {
  return (
    <input
      type='text'
      placeholder='search'
      onChange={debounce(onChange, timeout)}
    />
  );
};
