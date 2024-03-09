//provided to fill the leading zero.
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

async function fetchPokemon(pokemon) {
    const response1 = await fetch(pokemon.url);
    const data1 = await response1.json();

    const target_div = document.getElementById(pokemon.name);

    var newElement = document.createElement('p');
    newElement.setAttribute('class', 'pid');
    var textNode = document.createTextNode(pad(data1.id, 3));
    newElement.appendChild(textNode);
    target_div.appendChild(newElement);

    var img = document.createElement('img');
    img.src = data1.sprites.front_default;
    target_div.appendChild(img);

    var newElement1 = document.createElement('p');
    newElement1.setAttribute('class', 'name');
    var textNode = document.createTextNode(data1.name.toUpperCase());
    newElement1.appendChild(textNode);
    target_div.appendChild(newElement1);

    var newElement2 = document.createElement('p');
    newElement2.setAttribute('class', 'type');
    var types = data1.types.map(type => type.type.name);
    var textNode = document.createTextNode(types.join(", ").replace(/\b\w/g, c => c.toUpperCase()));
    newElement2.appendChild(textNode);
    target_div.appendChild(newElement2);
}

async function fetchPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
    const data = await response.json();

    for (let i = 0; i < data.results.length; i++) {
        var newElement = document.createElement('div');
        newElement.setAttribute('class', 'pokemon');
        newElement.setAttribute('id', data.results[i].name);
        document.getElementById("pokemons").appendChild(newElement);

        fetchPokemon(data.results[i]);
    }
}

fetchPokemons();

