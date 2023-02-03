import "./random-button.css";

const template = () => `
<section class="Colorfull">
<h2>Colorfull</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};
