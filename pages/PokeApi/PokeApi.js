import "./PokeApi.css";

const template = () => `
<section class="PokeApi">
<h2>PokeApi</h2>
</section>
`;



let pokemonList = [];
const getData = async () => {
  for (let i = 1; i < 152; i++) {
    try {
      const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      console.log(rawData);
      const dataToJson = await rawData.json();
      pokemonList.push(dataToJson);
    } catch (error) {
      console.log("no se ha podido hacer la peticion");
    }
  }
};


export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};


