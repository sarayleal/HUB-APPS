import "./Color.css";

const template = () => `
<section class="Color">
<h2>Color</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  
};
