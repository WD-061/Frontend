/**
 * PokemonCard Component
 * Displays information about a single Pokemon
 * 
 * Props:
 * - name: The name of the Pokemon
 * - sprite: URL to the Pokemon's image
 * - id: Unique identifier for the Pokemon
 */
const PokemonCard = ({ name, sprite, id }) => {
    return (
        <div>
            {/* Display the Pokemon's image */}
            <img src={sprite} alt={name} />
            
            {/* Display the Pokemon's name */}
            <h2>{name}</h2>
            
            {/* Display the Pokemon's ID */}
            <p>ID: {id}</p>
        </div>
    );
};

export default PokemonCard;
