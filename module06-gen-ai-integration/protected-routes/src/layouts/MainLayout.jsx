import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="routes bg-gray-700 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
