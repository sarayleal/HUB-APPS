import { initContent } from "../../main"
import "./Header.css";

const template = () => `
<nav>
<ul>
<li>
<a href="#" id="Homelink">Home</a>
<a href="#" id="Gameslink">Games</a>
<a href="#" id="Colorlink">Color</a>   
<a href="#" id="PokeApiLink>PokeApi</a>
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
    .querySelector("#PokeApiLink")
    .addEventListener("click", () => initContent("PokeApi"));
  
};

export const printTemplate = () => {
  document.querySelector("Header").innerHTML = template();
addListeners();
};
