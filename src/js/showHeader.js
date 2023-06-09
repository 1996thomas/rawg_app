const showHeader = () => {
  const header = document.querySelector(".header");
  if (header === null) {
    let header = document.createElement("header");
    header.classList.add("header");
    header.setAttribute("id", "header");
    let sectionHero = document.createElement("section");
    let headerWelcome = document.createElement("h2");
    let headerTextSmall = document.createElement("p")
    let headerText = document.createElement("p");
    headerWelcome.textContent = "Welcome,"
    headerText.textContent = "The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industry's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry, For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry, executives, gamers, and social influencers providing unprecdented exposure.";
    headerTextSmall.textContent = "The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industry's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best in the interactive entertainment industry."
    sectionHero.append(headerWelcome, headerText, headerTextSmall);
    header.appendChild(sectionHero);
    document.body.insertBefore(header, pageContent);
  }
};

export default showHeader;
