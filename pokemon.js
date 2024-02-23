//provided to fill the leading zero.
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

async function fetchPokemon(url) {
    const response1 = await fetch(url);
    const data1 = await response.json();
    console.log(data1);
    const target_div = document.getElementById("pokemons");
    var newElement = document.createElement('p');
    newElement.setAttribute('class', 'pid');
    var textNode = document.createTextNode(url.id);
    // add text to p
    target_div.appendChild(newElement);

    var img = document.createElement('img');
    img.src = data.sprites.front_default;
    target_div.appendChild(img);

    var newElement1 = document.createElement('p');
    newElement1.setAttribute('class', 'name');
    var textNode = document.createTextNode(url.name);
    newElement1.appendChild(textNode);

    var newElement2 = document.createElement('p');
    newElement2.setAttribute('class', 'type');
    for (let i = 0; i < url.types.length; i++) {
        var textNode = document.createTextNode(url.type[i].name);
        if (i = url.types.length - 1 ) {
            break;
        }
        else {
            textNode = textNode + ", ";
        }
        newElement2.appendChild(textNode);

    target_div.appendChild(newElement2);
    }
}



async function fetchPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
    const data = await response.json();
    //console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        //console.log(data.results[i].name);
        var newElement = document.createElement('div');
        // to add a class:
        newElement.setAttribute('class', 'pokemon');
        // to add an id
        newElement.setAttribute('id', data.results[i].name);
        // to add it to the div:
        document.getElementById("pokemons").appendChild(newElement);
        url = data.results[i].url
        const response1 = await fetch(url);
        const data1 = await response1.json();
        console.log(data1);
    }

}
fetchPokemons()

