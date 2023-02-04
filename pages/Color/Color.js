import "./Color.css";

const template = () => `
<section class="ChangeColor">
<h2>Change Color</h2>
<input type="text" id="Change Color"/>
<button id="ChangeColor">Change Color</button>
</section>
`;


const changeColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.background = bgColor;
};


const addListeners = () => {
  const loginInput = document.querySelector("#ChangeColor");
  document.querySelector("#ChangeColor").addEventListener("click", () => {
    localStorage.setItem("user", changeColor.value);
  });
};


export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};
