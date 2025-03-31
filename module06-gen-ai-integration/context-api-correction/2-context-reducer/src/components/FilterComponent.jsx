import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';

/**
 * FilterComponent
 * 
 * This component demonstrates how to:
 * 1. Read state from the context (state.filter)
 * 2. Dispatch actions to update the filter
 * 
 * It shows both sides of the reducer pattern: reading and updating state.
 */
const FilterComponent = () => {
  // Extract both state and dispatch from context
  // We need state to highlight the active filter button
  // We need dispatch to change the filter when a button is clicked
  const { dispatch, state } = useContext(TodosContext);

  return (
    <div className='mb-4 flex space-x-2'>
      {['all', 'completed', 'active'].map((filter, i) => (
        <button
          key={i}
          // Dispatch a 'SET_FILTER' action when a button is clicked
          // The payload is the filter value ('all', 'completed', or 'active')
          onClick={() => dispatch({ type: 'SET_FILTER', payload: filter })}
          // Use state.filter to determine which button should be highlighted
          // This demonstrates reading from the state managed by the reducer
          className={`bg-gray-200 px-3 py-1 rounded capitalize ${
            state.filter === filter ? 'bg-gray-400' : ''
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
