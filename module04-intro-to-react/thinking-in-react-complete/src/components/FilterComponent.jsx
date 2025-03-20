// Component for filtering the to-do list
// Accepts setFilter function to update the filter state
const FilterComponent = ({ setFilter }) => {
  // Updates the filter state based on user selection
  const setFilterInView = filter => {
    setFilter(filter);
  };

  // Renders buttons to select the filter type
  return (
    <div className='mb-4 flex space-x-2'>
      <button onClick={() => setFilterInView('all')} className='bg-gray-200 px-3 py-1 rounded'>
        All
      </button>
      <button onClick={() => setFilterInView('active')} className='bg-gray-200 px-3 py-1 rounded'>
        Active
      </button>
      <button
        onClick={() => setFilterInView('completed')}
        className='bg-gray-200 px-3 py-1 rounded'
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
