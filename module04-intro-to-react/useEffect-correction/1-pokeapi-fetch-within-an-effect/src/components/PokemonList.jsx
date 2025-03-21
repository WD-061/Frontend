import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

/**
 * PokemonList Component
 * Responsible for fetching Pokemon data from the PokeAPI and rendering a list of Pokemon cards
 * 
 * Uses:
 * - useState: To store the fetched Pokemon data
 * - useEffect: To perform the API fetch when the component mounts
 */
const PokemonList = () => {
  // State to store the list of Pokemon
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // Flag to prevent state updates if the component unmounts before fetch completes
    let ignore = false;
    
    /**
     * Asynchronous function to fetch all Pokemon data from the PokeAPI
     * - Fetches the first 150 Pokemon
     * - Adds sprite URLs and IDs to each Pokemon
     * - Updates the state with the processed data if the component is still mounted
     */
    const getAllPokemon = async () => {
      try {
        // Fetch Pokemon list from PokeAPI
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await res.json();
        
        const pokemonData = data.results;
        
        // Add sprite URLs and IDs to each Pokemon
        const pokeWithSprite = pokemonData.map((poke, i) => ({
          ...poke,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            i + 1
          }.png`,
          id: i + 1,
        }));

        // Only update state if component is still mounted
        if (!ignore) {
          setPokemon(pokeWithSprite);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function to fetch data
    getAllPokemon();

    // Cleanup function to prevent memory leaks
    return () => {
      ignore = true;
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Render the list of Pokemon cards
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {pokemon.map((p) => (
        <PokemonCard key={p.id} {...p} />
      ))}
    </div>
  );
};

export default PokemonList;
