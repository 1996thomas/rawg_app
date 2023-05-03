import displayGame from "./displayGame";
import displayScreenshots from "./displayScreenshots";
import displayHeroScreenshots from "./displayHeroScreenshots";
import displayBuyGame from "./displayBuyGame";
import displayVideo from "./displayVideo"

const PageDetail = (argument) => {
  const preparePage = () => {
    const fetchGameInfo = (url, argument) => {
      fetch(`${url}/${argument}?key=${process.env.RAWG_API}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
          displayBuyGame(responseData);
          displayVideo(responseData)
        })
        .then(() => {
          fetch(`${url}/${argument}/screenshots?key=${process.env.RAWG_API}`)
            .then((response) => response.json())
            .then((responseData) => {
              displayHeroScreenshots(responseData);
              displayScreenshots(responseData);
            });
        });
    };

    fetchGameInfo("https://api.rawg.io/api/games", argument);
  };

  const render = () => {
    const pageDetails = document.createElement("section");
    const pageDetail = document.createElement("div");
    pageDetails.classList.add("page-details");
    pageDetail.classList.add("page-detail");
    pageContent.append(pageDetails);

    const heroScreenshots = document.createElement("div");
    heroScreenshots.classList.add("hero-screenshot");

    const displayGame = document.createElement("div");
    displayGame.classList.add("page-detail__display");

    const displayBuyGame = document.createElement("div");
    const displayScreenshots = document.createElement("div");
    displayBuyGame.classList.add("page-detail__buy");
    pageDetail.append(displayGame, displayBuyGame, displayScreenshots);
    pageDetails.append(heroScreenshots, pageDetail);

    preparePage();
    
  };
  const header = document.querySelector(".header");
  pageContent.innerHTML = "";
  console.log("delete header");
  if (header !== null) {
    header.remove();
  }
  render();
};

export default PageDetail;
