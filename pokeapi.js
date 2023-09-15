let pokeArray = [];
const getPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const responseJson = await response.json();
  //   console.log(responseJson);
  pokeArray = [...pokeArray, responseJson];
};
let number=async () => {
    for (let i = 1; i <= 151; i++) {
        
      await getPokemon (i)   
    }
   init(pokeArray)
   inputsearch()
};
const init = (pokeArray) => {
  const mydiv$$ = document.querySelector(".container_card");

  mydiv$$.innerHTML=''

   for (const pokemon of pokeArray) {

    const newDivSS = document.createElement("div");
    newDivSS.className= 'pokeCard'
    newDivSS.innerHTML = `
<h4 class="text_card_name">${pokemon.name}</h4>
<div class="img_box">
<img class="img" src="${pokemon.sprites.other.dream_world.front_default}"/></div>
<h4 class="text_card">${pokemon.types.map((tipes)=>(tipes.type.name + "" ))}</h4>
<h4 class="text_card">altura: ${pokemon.height}</h4>
<h4 class="text_card">peso: ${pokemon.weight/10}</h4>
<h4 class="text_card">id: ${pokemon.id}</h4>

`;
    mydiv$$.appendChild(newDivSS);
  }


};
let inputsearch = () => {
  input$$=document.querySelector('input')
  input$$.addEventListener('input', ()=> searchPokemon(input$$.value, pokeArray)
  )
};
inputsearch()
const searchPokemon = (filtro, pokemones) => {
  // console.log('searchPokemon');
let filtropokemon = pokemones.filter((pokeArray)=> 
pokeArray.name.toLowerCase().includes(filtro.toLowerCase()) 
);
init(filtropokemon)
}
number()
// init();





