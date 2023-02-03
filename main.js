import "./style.css";

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
    case "Random Color":
      RandomButtonTemplate();
      break;
  }
};

initContent();
