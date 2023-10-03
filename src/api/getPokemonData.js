async function getPokemonData(idOrName) {
    //const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const url = `https://pokeapi.co/api/v2/pokemon/${idOrName.toLowerCase()}`;

    try{
        const response = await fetch(url);

        if (!response.ok) {
            console.error('Failed to fetch pokemon');
        }
        const data = await response.json();
        return data;

    }catch (error) {
        console.error('error while fetching pokemon data');
    }
}
export default getPokemonData;