import getPokemonData from "../api/getPokemonData.js";
import createPokemonCard from "../components/createPokemonCard.js";
import dom from "../dom.js";


async function getPokemonHandler() {
    const pokemonName = dom.searchInput.value.toLowerCase();
    const pokemonData = await getPokemonData(pokemonName);

    const error = document.getElementById('error-message');
    const pokemonCard = dom.pokemonCard;

    if (!pokemonData || pokemonName === '') {
        pokemonCard.innerHTML = '';
        pokemonCard.style.display = 'none';
        error.style.display='flex'
        error.innerText = 'Please, Enter a valid Pokemon Id Or Name';


    }else{
        error.style.display ='none';
        error.innerText = '';
    
        createPokemonCard(pokemonData);
        dom.searchInput.value = '';
    }
    
    }

export default getPokemonHandler ;
