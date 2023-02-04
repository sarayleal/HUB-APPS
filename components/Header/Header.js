import { initContent } from "../../main";
import "./Header.css"

const template = () => `
<nav>
<ul>
<li>
<a href="#" id="Homelink">Home</a>
</li>
<li>
<a href="#" id="Gameslink">Games</a>
</li>
<li>
<a href="#" id="Colorlink">Color</a>   
</li>
<li>
<a href="#" id="Pokelink">Poke</a>
</li>
</ul>
</nav>
`;

const addListeners = () => {
  document
    .querySelector("#Homelink")
    .addEventListener("click", () => initContent("Home"));
  document
    .querySelector("#Gameslink")
    .addEventListener("click", () => initContent("Games"));
  document
    .querySelector("#Colorlink")
    .addEventListener("click", () => initContent("Color"));
  document
    .querySelector("#Pokelink")
    .addEventListener("click", () => initContent("Poke"));

};

export const printTemplate = () => {
  document.querySelector("Header").innerHTML = template();
addListeners();
};
