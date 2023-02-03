import { initContent } from "../../main";
import "./Header.css";

const template = () => `
<nav>
<ul>
<li>
<a href="#" id="homelink">Home</a>
<a href="#" id="gameslink">Games</a>
<a href="#" id="randomcolorlink">Random Color</a>   
</a>
</li>
</ul>
</nav>
`;

const addListeners = () => {
  document
    .querySelector("#homelink")
    .addEventListener("click", () => initContent("Home"));
  document
    .querySelector("#gameslink")
    .addEventListener("click", () => initContent("Games"));
  document
    .querySelector("#randomcolorlink")
    .addEventListener("click", () => initContent("Random Color"));
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
