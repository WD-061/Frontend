import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [name]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Loading Pokémon...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-block mb-6 text-blue-500 hover:underline">
        &larr; Back to Pokédex
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-100 p-8 flex justify-center items-center">
            <img 
              src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
              alt={pokemon.name} 
              className="w-64 h-64 object-contain"
            />
          </div>
          
          <div className="md:w-2/3 p-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
              <span className="text-2xl font-bold">#{pokemon.id.toString().padStart(3, '0')}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Types</h2>
                <div className="flex gap-2">
                  {pokemon.types.map((type) => (
                    <span 
                      key={type.type.name}
                      className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 capitalize"
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Abilities</h2>
                <div className="flex flex-wrap gap-2">
                  {pokemon.abilities.map((ability) => (
                    <span 
                      key={ability.ability.name}
                      className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 capitalize"
                    >
                      {ability.ability.name.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Base Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                {pokemon.stats.map((stat) => (
                  <div key={stat.stat.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium capitalize">
                        {stat.stat.name.replace('-', ' ')}
                      </span>
                      <span className="text-sm font-medium">{stat.base_stat}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${Math.min(100, (stat.base_stat / 255) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Physical</h2>
                <p><span className="font-medium">Height:</span> {pokemon.height / 10} m</p>
                <p><span className="font-medium">Weight:</span> {pokemon.weight / 10} kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
