import { Gallery } from "./Gallery.css";

const template = () => `
<section class="Gallery">
<h2>Gallery</h2>
</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};
