import displayResults from "./displayResults";
import showHeader from "./showHeader";

const Home = (argument = "") => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");
    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          let splittedData = responseData.results.slice(0, 9);
          displayResults(splittedData);
          const buttonShowMore = document.querySelector(
            ".articles > button:last-child"
          );
          buttonShowMore.addEventListener("click", function (e) {
            splittedData = responseData.results.slice(0, 18);
            displayResults(splittedData);
          });
        });
    };

    fetchList(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_API}`,
      cleanedArgument
    );
  };

  const render = () => {
    pageContent.innerHTML = " ";
    preparePage();
    showHeader();
    
  };
  render();
};

export default Home;
