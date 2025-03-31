import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';
import ToDoItem from './ToDoItem';

/**
 * ToDoList Component
 * 
 * This component demonstrates how to read state from the reducer context
 * to display and filter todo items.
 * 
 * It shows how to:
 * 1. Access the todos array from state
 * 2. Access the current filter from state
 * 3. Apply filtering logic based on the current filter
 */
const ToDoList = () => {
  // Extract only the state from context
  // We don't need dispatch here since we're only reading, not updating
  const { state } = useContext(TodosContext);

  // Filter todos based on the current filter value in state
  // This demonstrates how to use multiple pieces of state together
  const filteredTodos = state.todos.filter(todo => {
    // Apply different filtering logic based on the current filter value
    if (state.filter === 'all') return true;
    if (state.filter === 'completed' && todo.completed) return true;
    if (state.filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <ul>
      {/* Map through the filtered todos and render a ToDoItem for each one */}
      {/* Pass each todo as a prop to the ToDoItem component */}
      {filteredTodos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
