console.log("Hello from poke-items.js!")

let fetchButton = document.getElementById("fetch-button");
let pokeInput = document.getElementById("poke-item");
let outputDiv = document.getElementById("poke-output");

async function handleFetch(){
    console.log("Hello from Fetch");
    let pokeItem = pokeInput.value;
    let result = await fetch(`https://pokeapi.co/api/v2/item/${pokeItem}/`);
    console.log(result);
    let data = await result.json();
    console.log(data);

    let languages = data.names;

    // let html = ``;
    // for(let i=0, i < languages.length; i++) {

    // }
}

fetchButton.addEventListener("click", handleFetch);