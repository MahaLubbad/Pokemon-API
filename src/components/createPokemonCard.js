import dom from "../dom.js";
import playPokemonSound from "../../sound/playPokemonSound.js";

const createPokemonCard = (pokemonData) =>
{
    //pokemon card 
const pokemonCard  = dom.pokemonCard;

pokemonCard .innerHTML = '';


//pokemon name
const pokemonName = document.createElement('h2');
pokemonName.innerText = pokemonData.name;
pokemonName.classList.add('pokemon-name');

// pokemon image 
const pokemonImage = document.createElement('img');
pokemonImage.src = pokemonData.sprites.front_default;
pokemonImage.alt = `${pokemonData.name} image`;

pokemonCard.append(pokemonName , pokemonImage);

pokemonCard.style.display = 'flex';


playPokemonSound();
}

export default createPokemonCard;