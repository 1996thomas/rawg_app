import "./style/index.scss";
import routes from "./js/routes.js";

formSearch.addEventListener("submit", function (e) {
  formSearch.action = `#pagelist/${search.value}`;
});

const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split("/");

  const pageName = pathParts[0];
  const pageArgument = pathParts[1] || "";
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
};

window.addEventListener("hashchange", () => callRoute());
window.addEventListener("DOMContentLoaded", () => callRoute());
