import "./Poke.css";

const template = () => `
<section class="Poke">
<h2>Poke</h2>

<div class="pokemonList"></div>
</section>
`;

let data = [];
const getData = async () => {
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
};

const printData = (list) => {
  const pokemonList = document.querySelector("pokemonList");
  for (const item of list) {
    const figure = document.createElement("figure");
    figure.innerHTML = `
  <img src=${item.image} alt=${item.name}/>
  <h3>${item.name}</h3>
  <figcaption>${item.description}</figcaption>
  `;
  }
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getData();
};
