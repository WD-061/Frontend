import { useState, useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';

/**
 * AddToDo Component
 * 
 * This component demonstrates how to use the dispatch function from our reducer context
 * to add new todo items to the state.
 */
const AddToDo = () => {
  // Extract only the dispatch function from context
  // We don't need the state here since we're only updating, not reading
  const { dispatch } = useContext(TodosContext);
  
  // Local state for the input field
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo) return;
    
    // Dispatch an action to the reducer
    // The action has:
    // 1. A 'type' that tells the reducer what operation to perform ('ADD_TODO')
    // 2. A 'payload' containing the data needed (the todo text)
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    
    // Reset the input field after adding
    setNewTodo('');
  };

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
