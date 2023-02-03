import "./style.css";
import { printTemplate as HeaderTemplate } from "./components/Header/Header"
import { printTemplate as HomeTemplate } from "./pages/Home/Home";
import { printTemplate as GamesTemplate } from "./pages/Games/Games";
import { printTemplate as ColorTemplate } from "./pages/Color/Color";

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
    case "Color":
      ColorTemplate();
      break;
  }
};


HeaderTemplate();

initContent();
