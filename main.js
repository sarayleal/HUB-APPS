import "./style.css";
import { printTemplate as HeaderTemplate } from "./components/Header/Header";
import { printTemplate as HomeTemplate } from "./pages/Home/home";
import { printTemplate as GamesTemplate } from "./pages/Games/games";
import { printTemplate as ColorfullTemplate } from "./pages/Colorfull/colorfull";

export const initContent = (route) => {
  switch (route) {
    case undefined:
      HomeTemplate();
      break;
    case "Home":
      HomeTemplate();
      break;
    case "Games":
      GamesTemplate();
      break;
    case "Colorfull":
      ColorfullTemplate();
      break;
  }
};

HeaderTemplate();
initContent();
