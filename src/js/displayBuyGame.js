const displayBuyGame = (gameData) => {
  const pageDetail = document.querySelector(".page-detail");
  const { platforms } = gameData;
  // let pageDetail = document.querySelector(".page-detail");
  const displayBuyGame = document.querySelector(".page-detail__buy");
  displayBuyGame.classList.add("page-detail__buy");

  let pageDetailBuyTitle = document.createElement("h2");
  pageDetailBuyTitle.textContent = "BUY";

  displayBuyGame.append(pageDetailBuyTitle);
  platforms.map((platform) => {
    displayBuyGame.innerHTML += `
      <div class='platform'>${platform.platform.name}</div>`;
  });
};

export default displayBuyGame;
