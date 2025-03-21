import PokemonList from "./components/PokemonList";

/**
 * Main App component
 * Serves as the entry point for the application
 * Renders the title and the PokemonList component
 */
const App = () => {
  return (
    <div>
      <h1>Fetch Pokemons</h1>
      <PokemonList />
    </div>
  );
};

export default App;
