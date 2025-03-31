import { useContext } from "react";
import { TodosContext } from "../context/TodosProvider";

// Component for filtering the to-do list using Context API
const FilterComponent = () => {
  // Get setFilter from context instead of props
  const { setFilter } = useContext(TodosContext);

  // Updates the filter state based on user selection
  const setFilterInView = (filter) => {
    setFilter(filter);
  };

  // Renders buttons to select the filter type
  return (
    <div className="mb-4 flex space-x-2">
      <button
        onClick={() => setFilterInView("all")}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        All
      </button>
      <button
        onClick={() => setFilterInView("active")}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        Active
      </button>
      <button
        onClick={() => setFilterInView("completed")}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
