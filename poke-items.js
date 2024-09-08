// console.log("Hello from poke-items.js!")

// let fetchButton = document.getElementById("fetch-button");
// let pokeInput = document.getElementById("poke-item");
// let outputDiv = document.getElementById("poke-output");

// async function handleFetch(){
//     console.log("Hello from Fetch");
//     let pokeItem = pokeInput.value;
//     let result = await fetch(`https://pokeapi.co/api/v2/item/${pokeItem}/`);
//     console.log(result);
//     let data = await result.json();
//     console.log(data);
// }

console.log("Hello from poke-items.js!");
// Get the button, input, and output div elements by their IDs
let fetchButton = document.getElementById("fetch-button");
let pokeInput = document.getElementById("poke-item");
let outputDiv = document.getElementById("poke-output");
// Define the async function to handle fetching data
async function handleFetch() {
    console.log("Hello from Fetch");
    // Get the input value (pokeItem)
    let pokeItem = pokeInput.value;
    try {
        // Fetch the data from the PokeAPI for the specific item
        let result = await fetch(`https://pokeapi.co/api/v2/item/${pokeItem}/`);
        console.log(result);
        // Check if the result is successful
        if (!result.ok) {
            throw new Error("Item not found");
        }
        // Convert the response to JSON
        let data = await result.json();
        console.log(data);
        // Display the fetched data (for example, showing the item's name)
        outputDiv.innerHTML = `Item Name: ${data.name}<br>Cost: ${data.cost}<br>Effect: ${data.effect_entries[0].effect}`;
    } catch (error) {
        console.error("Error fetching item:", error);
        outputDiv.innerHTML = `Error: ${error.message}`;
    }
}
// Add event listener to the button
fetchButton.addEventListener("click", handleFetch);