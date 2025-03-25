import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import MainLayout from "./layouts/MainLayout";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="pokemon/:name" element={<PokemonDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
