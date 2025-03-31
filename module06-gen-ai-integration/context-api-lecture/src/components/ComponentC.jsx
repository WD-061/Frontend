import ComponentD from "./ComponentD.jsx";
import { useUser } from "../context/UserContext";

const ComponentC = () => {
  // Using the custom useUser hook to access context values
  // This component only needs the 'user' value from context, so it destructures just that property
  // Each component can independently access the context without relying on its parent
  const { user } = useUser();

  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentC</h1>
      {/* Displaying the user value obtained from context */}
      {/* Notice how ComponentB used age and ComponentC uses user - each component */}
      {/* can access different parts of the same context */}
      <h2>{user}</h2>
      {/* ComponentD will be rendered without passing any props */}
      <ComponentD />
    </div>
  );
};

export default ComponentC;
