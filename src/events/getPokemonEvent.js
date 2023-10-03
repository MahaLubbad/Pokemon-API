import getPokemonHandler from "../handlers/getPokemonHandler.js";
import dom from "../dom.js";


const getPokemonEvent = () => {

    dom.searchBtn.addEventListener('click', getPokemonHandler);
    dom.searchInput.addEventListener('keyup' , (e) => {
       
        if ( e.key === 'Enter'){
         
            getPokemonHandler(); 
        }  
    }) 
}
export default getPokemonEvent ;
