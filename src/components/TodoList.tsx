import React, { useState, useEffect } from 'react';
import { Todo as TodoType } from '../types/Todo';
import Todo from './Todo';
import TodoForm from './TodoForm';

const STORAGE_KEY = 'todos';

const TodoList: React.FC = () => {
  // Laad todos uit localStorage bij initialisatie
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Update localStorage wanneer todos veranderen
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: TodoType = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Mijn Todo Lijst</h1>
      <TodoForm onAdd={addTodo} />
      <div>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
      <div style={{ marginTop: '20px', color: '#666' }}>
        {todos.length === 0 ? (
          <p>Geen taken toegevoegd</p>
        ) : (
          <p>Aantal taken: {todos.length}</p>
        )}
      </div>
    </div>
  );
};

export default TodoList; 