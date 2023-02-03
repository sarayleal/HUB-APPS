import "./random-button.css";

const template = () => `
<section class="Random-Color">
<h2>Color me</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};
