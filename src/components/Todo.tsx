import React from 'react';
import { Todo as TodoType } from '../types/Todo';

interface Props {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const Todo: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{
          marginLeft: '10px',
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          marginLeft: 'auto',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Verwijder
      </button>
    </div>
  );
};

export default Todo; 