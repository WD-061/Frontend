import { UserProvider } from "../context/UserContext";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    // UserProvider wraps the component tree, making the context available to all nested components
    // This is the top-level component where we establish the context
    // Any component inside this Provider can access the context values (user and age)
    // without having to pass props through each level of the component tree
    <UserProvider>
      <div className="m-1 p-4 border-black border-2">
        <h1 className="font-bold">ComponentA</h1>
        {/* <h2>{`Hello there, ${user}`}</h2> */}
        {/* ComponentA doesn't consume the context itself, but passes it down */}
        {/* This demonstrates how context eliminates prop drilling */}
        <ComponentB />
      </div>
    </UserProvider>
  );
};

export default ComponentA;
