import "./games.css";

const template = () => `
<section class="Games">
<h2>Games</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};

