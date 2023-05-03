const displayScreenshots = (gameData) => {
  const pageDetail = document.querySelector(".page-detail");
  let pageDetailScreenshotsTitle = document.createElement("h2");
  pageDetailScreenshotsTitle.textContent = "SCREENSHOTS";
  const parent = document.createElement("div");
  parent.classList.add("parent");
  const firstDiv = document.createElement("img");
  const secondDiv = document.createElement("img");
  const thirdDiv = document.createElement("img");
  firstDiv.classList.add("div1");
  secondDiv.classList.add("div2");
  thirdDiv.classList.add("div3");
  firstDiv.src = gameData.results[0].image;
  secondDiv.src = gameData.results[1].image;
  thirdDiv.src = gameData.results[3].image;
  parent.append(firstDiv, secondDiv, thirdDiv);
  pageDetail.append(pageDetailScreenshotsTitle, parent);
};

export default displayScreenshots;
