let pokeArray = [];
const getPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const responseJson = await response.json();
  //   console.log(responseJson);
  pokeArray = [...pokeArray, responseJson];
};
let number=async (num) => {
    for (let i = 1; i <= num; i++) {
        
      await getPokemon (i)   
    }
   
}
const init = async () => {

await number(151);
   for (const pokemon of pokeArray) {
    const mydiv$$ = document.querySelector(".container_card");
    const newDivSS = document.createElement("div");
    newDivSS.className= 'pokeCard'
    newDivSS.innerHTML = `
<h4 class="text_card">${pokemon.name}</h4>
<div class="img_box">
<img class="img" src="${pokemon.sprites.other.dream_world.front_default}"/></div>
<h4 class="text_card">${pokemon.types[0].type.name}</h4>
<h4 class="text_card">altura: ${pokemon.height}</h4>
<h4 class="text_card">peso: ${pokemon.weight}</h4>
<h4 class="text_card">id: ${pokemon.id}</h4>

`;
    mydiv$$.appendChild(newDivSS);
  }


};
init();
