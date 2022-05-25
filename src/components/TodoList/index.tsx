import React from 'react';
import { Todo } from '../../models/todo.model';

type TodoListProps = {
  children?: (todo: Todo, index: number) => React.ReactNode;
  error?: boolean;
  loading?: boolean;
  empty: boolean;
  searchTodos: Array<Todo>;
  searchText: string;
  render?: (todo: Todo, index: number) => React.ReactNode;
  onEmpty: () => React.ReactNode;
  onEmptySearch: (search: string) => React.ReactNode;
};

export const TodoList: React.FC<TodoListProps> = (props) => {
  const defaultRender = (todo: Todo, index: number) => <></>;
  const render = props.render || props.children || defaultRender;

  return (
    <ul style={{ width: '100%' }}>
      {props.empty && props.onEmpty()}

      {props.searchTodos && props.searchTodos.map(render)}

      {props.searchText !== '' &&
        !props.empty &&
        props.searchTodos.length === 0 &&
        props.onEmptySearch(props.searchText)}
    </ul>
  );
};
