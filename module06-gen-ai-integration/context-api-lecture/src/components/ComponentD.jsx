import { useUser } from "../context/UserContext";

const ComponentD = () => {
  // Using the custom useUser hook to access context values
  // This component needs both 'user' and 'age' values from context
  // Even though this is deeply nested, it can directly access the context
  // without having to receive props through ComponentA → ComponentB → ComponentC
  const { user, age } = useUser();

  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentD</h1>
      {/* Using both context values in a template literal */}
      {/* This demonstrates how context solves the "prop drilling" problem */}
      {/* Without context, we would need to pass these values through each component level */}
      <h2>{`You finally arrived, ${user}. You are ${age} years old.`}</h2>
    </div>
  );
};

export default ComponentD;
