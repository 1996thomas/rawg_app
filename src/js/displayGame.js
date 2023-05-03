const displayGame = (gameData) => {
  const pageDetail = document.querySelector(".page-detail");
  const displayGame = document.querySelector(".page-detail__display")
  const {
    name,
    released,
    description,
    rating,
    ratings_count,
    developers,
    platforms,
    publishers,
    genres,
    tags,
  } = gameData;

  // let pageDetail = document.createElement("div");
  // pageDetail.classList.add("page-detail");

  let pageDetailHeader = document.createElement("div");
  pageDetailHeader.classList.add("page-detail__header");

  let pageDetailTitle = document.createElement("h2");
  let pageDetailNote = document.createElement("p");
  let pageDetailReview = document.createElement("p");

  let pageDetailPlot = document.createElement("div");
  pageDetailPlot.classList.add("page-detail__plot");
  pageDetailPlot.innerHTML = description;

  let pageDetailInfo = document.createElement("div");
  pageDetailInfo.classList.add("page-detail__info");
  for (let index = 0; index < 6; index++) {
    pageDetailInfo.innerHTML += `
    <div>
    <h3></h3>
    <p></p>
    </div>
    `;
  }

  pageDetailTitle.textContent = name;
  pageDetailReview.textContent = ratings_count + " votes";
  pageDetailNote.textContent = rating + " ⭐ -";
  pageDetailInfo.children[0].children[0].innerHTML = "Release Date";
  pageDetailInfo.children[0].children[1].innerHTML = released;
  if(developers[0] !== undefined){
    pageDetailInfo.children[1].children[0].innerHTML = "Developer";
    pageDetailInfo.children[1].children[1].innerHTML = developers[0].name;
  }
  pageDetailInfo.children[2].children[0].innerHTML = "Platforms";
  pageDetailInfo.children[2].children[1].innerHTML =
    platforms[0].platform.name;

  if(publishers[0] !== undefined){
    pageDetailInfo.children[3].children[0].innerHTML = "Publisher";
    pageDetailInfo.children[3].children[1].innerHTML = publishers[0].name;
  }
  pageDetailInfo.children[4].children[0].innerHTML = "Genre";
  pageDetailInfo.children[4].children[1].innerHTML = genres.map(
    (genre) => genre.name + "&nbsp;"
  );
  pageDetailInfo.children[5].children[0].innerHTML = "Tags";
  pageDetailInfo.children[5].children[1].innerHTML = tags.map(
    (tag) => tag.name + "&nbsp;"
  );

  pageDetailHeader.append(
    pageDetailTitle,
    pageDetailNote,
    pageDetailReview
  );
  displayGame.append(pageDetailHeader, pageDetailPlot, pageDetailInfo);
  // articleDOM.append(pageDetail);
};

export default displayGame