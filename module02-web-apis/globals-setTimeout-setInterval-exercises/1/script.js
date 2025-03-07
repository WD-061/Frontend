// Step 1: Create a variable 'counter' and set it to 1
let counter = 1;

// Step 2: Use setInterval to schedule a fetch request every second
const intervalId = setInterval(() => {
  // Step 3: Construct the fetch URL using the current value of 'counter'
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;

  // Step 4: Fetch the data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Step 4: Extract the Pokémon's name and ID
      const pokemon = {
        id: data.id,
        name: data.name,
      };

      // Step 5: Output the Pokémon object to the console
      console.log(pokemon);
    })
    .catch((error) => {
      console.error("Error fetching Pokemon data:", error);
    });

  // Step 6: Increment the counter
  counter++;

  // Step 7: Stop the interval after 10 requests
  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 1000);
