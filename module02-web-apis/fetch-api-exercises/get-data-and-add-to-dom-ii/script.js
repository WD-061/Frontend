// ===================================================================================
// First APPROACH with error handling
// ===================================================================================

const pokemonContainer = document.getElementById("pokemon-container");

// Function to fetch data for a specific Pokémon by ID
const fetchPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error(`Something went wrong. Status: ${response.status}`);
    }
    const pokemon = await response.json();
    // console.log(pokemon);
    return pokemon;
  } catch (error) {
    console.error(error);
    // Return null instead of rethrowing
    return null;
  }
};

// Function to display Pokémon cards in the DOM
const displayPokemons = async () => {
  // Loop through the first 20 Pokémon IDs
  for (let i = 1; i <= 20; i++) {
    const pokemon = await fetchPokemon(i);

    // If fetchPokemon returns null, it means there was an error
    if (pokemon === null) {
      // Stop the loop on any error
      console.error(`Loop stopped due to a fetching error!`);
      break;
    }

    // Create and display the Pokémon card
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add(
      "bg-white",
      "rounded-lg",
      "shadow-md",
      "p-4",
      "flex",
      "flex-col",
      "items-center",
      "text-center"
    );

    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add("mb-4");

    const pokemonName = document.createElement("h2");
    pokemonName.textContent =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonName.classList.add("text-xl", "font-bold", "mb-2");

    const pokemonInfo = document.createElement("p");
    pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types
      .map((typeInfo) => typeInfo.type.name)
      .join(", ")}`;
    pokemonInfo.classList.add("text-gray-600");

    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonInfo);

    pokemonContainer.appendChild(pokemonCard);
  }
};

// Fetch and display Pokémon on page load
displayPokemons();

// ===================================================================================
// ALTERNATIVE APPROACH using Promise.all for parallel fetching without error handling
// ===================================================================================

// const pokemonContainer = document.getElementById("pokemon-container");

// // Function to fetch data for a specific Pokémon by ID
// const fetchPokemon = async (id) => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//     const pokemon = await response.json();
// console.log(pokemon);
//     return pokemon;
//   } catch (error) {
//     console.error(`Error fetching Pokémon with ID ${id}:`, error);
//   }
// }

// // Function to create a Pokémon card element
// const createPokemonCard = (pokemon) => {
//   const pokemonCard = document.createElement("div");
//   pokemonCard.classList.add(
//     "bg-white",
//     "rounded-lg",
//     "shadow-md",
//     "p-4",
//     "flex",
//     "flex-col",
//     "items-center",
//     "text-center"
//   );

//   const pokemonImage = document.createElement("img");
//   pokemonImage.src = pokemon.sprites.front_default;
//   pokemonImage.alt = pokemon.name;
//   pokemonImage.classList.add("mb-4");

//   const pokemonName = document.createElement("h2");
//   pokemonName.textContent =
//     pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
//   pokemonName.classList.add("text-xl", "font-bold", "mb-2");

//   const pokemonInfo = document.createElement("p");
//   pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types
//     .map((typeInfo) => typeInfo.type.name)
//     .join(", ")}`;
//   pokemonInfo.classList.add("text-gray-600");

//   pokemonCard.appendChild(pokemonImage);
//   pokemonCard.appendChild(pokemonName);
//   pokemonCard.appendChild(pokemonInfo);

//   return pokemonCard;
// }

// // Alternative function to display Pokémon cards using Promise.all
// const displayPokemonsParallel = async () => {
//   // Create an array of promises for fetching the first 20 Pokémon
//   const pokemonPromises = [];
//   for (let i = 1; i <= 20; i++) {
//     pokemonPromises.push(fetchPokemon(i));
//   }

//   try {
//     // Wait for all promises to resolve simultaneously
//     const pokemons = await Promise.all(pokemonPromises);

//     // Add each Pokémon to the DOM
//     pokemons.forEach(pokemon => {
//       if (pokemon) {
//         const card = createPokemonCard(pokemon);
//         pokemonContainer.appendChild(card);
//       }
//     });
//   } catch (error) {
//     console.error("Error fetching Pokémon:", error);
//   }
// }

// displayPokemonsParallel();
