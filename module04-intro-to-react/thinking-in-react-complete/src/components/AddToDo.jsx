import { useState } from 'react';

// Component for adding a new to-do item
// Accepts setTodos function to update the to-do list state
const AddToDo = ({ setTodos }) => {
  // State to store the new to-do text
  const [newTodo, setNewTodo] = useState('');

  // Handles form submission to add a new to-do
  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo) return;

    setTodos(prevTodos => {
      const newState = [{ id: Date.now(), text: newTodo, completed: false }, ...prevTodos];
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    });
    setNewTodo('');
  };

  // Renders the form for adding a new to-do
  return (
    <form onSubmit={handleSubmit} className='mb-4 flex'>
      <input
        type='text'
        name='todo'
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder='Add a new to-do'
        className='flex-1 border rounded px-2 py-1 mr-2'
      />
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
        Add
      </button>
    </form>
  );
};

export default AddToDo;
