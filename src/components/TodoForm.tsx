import React, { useState } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Voeg een nieuwe taak toe..."
        style={{
          padding: '8px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          marginRight: '10px',
          width: '300px'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Toevoegen
      </button>
    </form>
  );
};

export default TodoForm; 