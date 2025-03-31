import ComponentC from "./ComponentC.jsx";
import { useUser } from "../context/UserContext";

const ComponentB = () => {
  // Using the custom useUser hook to access context values
  // This component only needs the 'age' value from context, so it destructures just that property
  // This is a key benefit of Context - components can selectively consume only what they need
  const { age } = useUser();

  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentB</h1>
      {/* Displaying the age value obtained from context */}
      {/* No props needed to be passed from parent components */}
      <h2>{age}</h2>
      {/* Passing down the component tree without needing to forward props */}
      <ComponentC />
    </div>
  );
};

export default ComponentB;
