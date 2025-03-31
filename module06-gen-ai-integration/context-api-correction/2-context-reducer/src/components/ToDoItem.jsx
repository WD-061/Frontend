import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';

/**
 * ToDoItem Component
 * 
 * This component demonstrates how to use the dispatch function
 * to toggle the completion status of a todo item.
 * 
 * It receives a todo object as a prop from its parent component (ToDoList)
 * and uses the dispatch function from context to update that todo.
 */
const ToDoItem = ({ todo }) => {
  // Extract only the dispatch function from context
  // We only need dispatch here because the todo data is passed as a prop
  const { dispatch } = useContext(TodosContext);

  return (
    <li className='flex items-center mb-2'>
      <input
        type='checkbox'
        checked={todo.completed}
        // When the checkbox is clicked, dispatch a 'TOGGLE_TODO' action
        // The payload is the todo's ID, which the reducer uses to find
        // the correct todo item to toggle in the state
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
        className='mr-2'
      />
      {/* Apply conditional styling based on the todo's completed status */}
      <span className={todo.completed ? 'line-through text-gray-400' : ''}>{todo.text}</span>
    </li>
  );
};

export default ToDoItem;
