import "./style.css";

import { printTemplate as HeaderTemplate } from "./components/Header/Header";
import { printTemplate as HomeTemplate } from "./pages/Home/Home";
import { printTemplate as GamesTemplate } from "./pages/Games/Games";
import { printTemplate as ColorTemplate } from "./pages/Color/Color";
import { printTemplate as PokeTemplate } from "./pages/Poke/Poke";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";

export const initContent = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? HomeTemplate() : LoginTemplate();
      break;
    case "Home":
      HomeTemplate();
      break;
    case "Games":
      GamesTemplate();
      break;
    case "Color":
      ColorTemplate();
      break;
    case "Poke":
      PokeTemplate();
      break;
    case "Login":
      LoginTemplate();
      break;
  }
};

HeaderTemplate();

initContent();
