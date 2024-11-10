var slok = 1;

const getPokemon = async () => {
    try {

        const pokemonSearch = document.getElementById("search-input").value.toLowerCase();
        console.log(pokemonSearch);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonSearch, {});
        const json = await response.json();

        document.getElementById("pokeImg").src = json.sprites.front_default;
        document.getElementById("pokeType").innerHTML = "Type: " + json.types[0].type.name.toUpperCase();

        const ulList = document.getElementById("lstStats");
        ulList.innerHTML = "";
        json.stats.map((x) => {
            const node = document.createElement("li");
            const textnode = document.createTextNode(x.stat.name.toUpperCase() + " : " + x.base_stat);
            node.appendChild(textnode);
            ulList.appendChild(node);
        });
    } catch (error) {
        console.log(error);
    }
};


document.getElementById('search').addEventListener('click', getPokemon);
