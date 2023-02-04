import "./pokeCard.css";

let allCharacters = [];
//&recuperamos los datos de la api y los metemos en un container.
export const getPokemons = async () => {
  for (let i = 1; i < 152; i++) {
    try {
      const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      console.log(rawData);
      const dataToJson = await rawData.json();
      data.push(dataToJson);
    } catch (error) {
      console.log("no se ha podido hacer la peticion");
    }
  }
  mappedPokemons(allPokemons);
};

//&Mapeamos los pokemons almacenados en el container, para poder sacar una lista con sus caracteristicas.
const mappedPokemons = (allPokemons) => {
  allCharacters = allPokemons.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    experience: pokemon.base_experience,
    height: pokemon.height,
    weight: pokemon.weight,
    ability: pokemon.abilities,
    type: pokemon.types,
    locationsEncounters: pokemon.location_area_encounters,
  }));
  printPokemons(allCharacters);
};

//&Creamos el frontal de las cartas, con los datos recuperados en el mapeo.
export const printPokemons = (allCharacters) => {
  for (const pokemon of allCharacters) {
    const flipCard = document.createElement("div");
    flipCard.setAttribute("class", "flipCard");
    const cardInner = document.createElement("div");
    cardInner.setAttribute("class", "cardInner");

    const figureFront = document.createElement("figure");
    figureFront.setAttribute("id", `card_front`);
    figureFront.innerHTML = `
      <h1>${pokemon.name.toUpperCase()}</h1>
      <img src= ${pokemon.image} alt= "${pokemon.name} image"/>
      <h2>Tipo:</h2>`;
    for (const type of pokemon.type) {
      const tipo = document.createElement("tipo");
      tipo.innerHTML = tipo.type.name;
      figureFront.appendChild(tipo);
    }
    cardInner.appendChild(figureFront);
  }
};

//&Hacemos un buscador por nombre.
export const filterByName = (value) => {
  const filteredPoke = allCharacters.filter((pokemon) =>
    pokemon.name.includes(value)
  );
  printPokemons(filteredPoke);
};
