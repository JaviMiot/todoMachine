import React from 'react';
import { Todo } from '../../models/todo.model';

type TodoListProps = {
  children?: React.ReactNode;
  error?: boolean;
  loading?: boolean;
  empty: boolean;
  searchTodos: Array<Todo>;
  render: (todo: Todo, index: number) => React.ReactNode;
  onEmpty: () => React.ReactNode;
};

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul style={{ width: '100%' }}>
      {props.empty && props.onEmpty()}
      {props.searchTodos && props.searchTodos.map(props.render)}

      {props.children}
    </ul>
  );
};
