import "./Home.css";

const template = () => `
    <section class="Home">
        <h2>Home</h2>
    </section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};





