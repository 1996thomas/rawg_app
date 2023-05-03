const displayHeroScreenshots = (gameData) => {
  const articleDOM = document.querySelector(".page-details .article");
  const pageDetail = document.querySelector(".page-detail");
  const headerTitle = document.querySelector(".title");
  const { results } = gameData;
  
  const heroScreenshots = document.querySelector('.hero-screenshot')
  let heroScreenshotsImg = document.createElement("img");
  let heroScreenshotsCTA = document.createElement("button");
  heroScreenshotsCTA.textContent = "Check Website ➔";
  
  
  heroScreenshotsImg.src = results[2].image;
  
  heroScreenshots.appendChild(heroScreenshotsCTA);
  heroScreenshots.appendChild(heroScreenshotsImg);
};

export default displayHeroScreenshots