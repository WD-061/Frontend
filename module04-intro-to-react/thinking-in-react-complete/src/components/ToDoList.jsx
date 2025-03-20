import ToDoItem from './ToDoItem';

// Component for rendering the list of to-do items
// Accepts todos array and toggleTodo function to update item completion status
const ToDoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
