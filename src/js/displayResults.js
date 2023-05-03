const displayResults = (articles) => {
  const articleDOM = document.querySelector(".page-details .article");
  pageContent.innerHTML = `
      <section class="page-list ">
        <div class="articles auto-grid">Loading...</div>
      </section>`;
  const resultsContent = articles.map(
    (article) => 
      `<article class="cardGame">
          <div class="cardGame__header">
          <a href=#pagedetail/${article.id}>
            <img src="${article.background_image}">
            </a>
          </div>
          <div class="cardGame__body">
            <p>${article.name}</p>
            <p>${article.released}</p>
          </div>
    </article>
    `
  );
  const buttonShowMore = document.createElement('button')
  buttonShowMore.textContent = 'Show more'
  const resultsContainer = document.querySelector(".page-list .articles");
  resultsContainer.innerHTML = resultsContent.join("\n");
  resultsContainer.append(buttonShowMore)
};

export default displayResults;
