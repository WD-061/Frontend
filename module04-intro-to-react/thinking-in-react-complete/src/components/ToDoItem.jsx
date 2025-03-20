// Component for rendering a single to-do item
// Accepts todo object and toggleTodo function to update the completion status
const ToDoItem = ({ todo, toggleTodo }) => {
  return (
    <li className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="mr-2"
      />
      <span
        className={todo.completed ? "line-through text-gray-400" : undefined}
      >
        {todo.text}
      </span>
    </li>
  );
};

export default ToDoItem;
