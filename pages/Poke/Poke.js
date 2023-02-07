import "./Poke.css";
import { initContent } from "../../main";
import { getPokemons } from "../../components/pokeCard/pokeCard";
import { filterByName } from "../../components/pokeCard/pokeCard";

const template = () => `
<div id="pokemon-container">
<div id="pokemon-filtered">
<input type="text" id ="inputFilter" placeholder="INTRO NAME">
<button id="buttonFilter"><img class='pokeball'src='https://res.cloudinary.com/damtbzspb/image/upload/v1675545336/pokeapi/pikachu_icon-icons.com_67535_c57djr.png' alt='pokeball pikachu'/></button>
</div>
<div id="selectorType">
<ul class="TypeList"></ul>
</div>
<section id="cards"></section>
</div>`;

const addListeners = () => {
  const input = document.querySelector("#inputFilter");
  document.querySelector("#start-button").addEventListener("click", () => {
    initContent("Hub");
  });
  document.querySelector("#buttonFilter").addEventListener("click", () => {
    document.querySelector("#cards").innerHTML = "";
    console.log("click");
    filterByName(input.value);
  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  template();
  addListeners();
};
