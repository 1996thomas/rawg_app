/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _js_routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/routes.js */ \"./src/js/routes.js\");\n\n\nformSearch.addEventListener(\"submit\", function (e) {\n  formSearch.action = \"#pagelist/\".concat(search.value);\n});\nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split(\"/\");\n  var pageName = pathParts[0];\n  var pageArgument = pathParts[1] || \"\";\n  var pageFunction = _js_routes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"][pageName];\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n};\nwindow.addEventListener(\"hashchange\", function () {\n  return callRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return callRoute();\n});\n\n//# sourceURL=webpack://rawg_application/./src/index.js?");

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayResults */ \"./src/js/displayResults.js\");\n/* harmony import */ var _showHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showHeader */ \"./src/js/showHeader.js\");\n\n\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        var splittedData = responseData.results.slice(0, 9);\n        (0,_displayResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(splittedData);\n        var buttonShowMore = document.querySelector(\".articles > button:last-child\");\n        buttonShowMore.addEventListener(\"click\", function (e) {\n          splittedData = responseData.results.slice(0, 18);\n          (0,_displayResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(splittedData);\n        });\n      });\n    };\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"a983cda3781d479aa9a66829e3567ddf\"), cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \" \";\n    preparePage();\n    (0,_showHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  };\n  render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://rawg_application/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayGame */ \"./src/js/displayGame.js\");\n/* harmony import */ var _displayScreenshots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayScreenshots */ \"./src/js/displayScreenshots.js\");\n/* harmony import */ var _displayHeroScreenshots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayHeroScreenshots */ \"./src/js/displayHeroScreenshots.js\");\n/* harmony import */ var _displayBuyGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayBuyGame */ \"./src/js/displayBuyGame.js\");\n/* harmony import */ var _displayVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayVideo */ \"./src/js/displayVideo.js\");\n\n\n\n\n\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var fetchGameInfo = function fetchGameInfo(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(\"a983cda3781d479aa9a66829e3567ddf\")).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        (0,_displayGame__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseData);\n        (0,_displayBuyGame__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(responseData);\n        (0,_displayVideo__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(responseData);\n      }).then(function () {\n        fetch(\"\".concat(url, \"/\").concat(argument, \"/screenshots?key=\").concat(\"a983cda3781d479aa9a66829e3567ddf\")).then(function (response) {\n          return response.json();\n        }).then(function (responseData) {\n          (0,_displayHeroScreenshots__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(responseData);\n          (0,_displayScreenshots__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(responseData);\n        });\n      });\n    };\n    fetchGameInfo(\"https://api.rawg.io/api/games\", argument);\n  };\n  var render = function render() {\n    var pageDetails = document.createElement(\"section\");\n    var pageDetail = document.createElement(\"div\");\n    pageDetails.classList.add(\"page-details\");\n    pageDetail.classList.add(\"page-detail\");\n    pageContent.append(pageDetails);\n    var heroScreenshots = document.createElement(\"div\");\n    heroScreenshots.classList.add(\"hero-screenshot\");\n    var displayGame = document.createElement(\"div\");\n    displayGame.classList.add(\"page-detail__display\");\n    var displayBuyGame = document.createElement(\"div\");\n    var displayScreenshots = document.createElement(\"div\");\n    displayBuyGame.classList.add(\"page-detail__buy\");\n    pageDetail.append(displayGame, displayBuyGame, displayScreenshots);\n    pageDetails.append(heroScreenshots, pageDetail);\n    preparePage();\n  };\n  var header = document.querySelector(\".header\");\n  pageContent.innerHTML = \"\";\n  console.log(\"delete header\");\n  if (header !== null) {\n    header.remove();\n  }\n  render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageDetail);\n\n//# sourceURL=webpack://rawg_application/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayResults */ \"./src/js/displayResults.js\");\n\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        var splittedData = responseData.results.slice(0, 9);\n        (0,_displayResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(splittedData);\n        var buttonShowMore = document.querySelector(\".articles > button:last-child\");\n        buttonShowMore.addEventListener(\"click\", function (e) {\n          splittedData = responseData.results.slice(0, 18);\n          (0,_displayResults__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(splittedData);\n        });\n      });\n    };\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(\"a983cda3781d479aa9a66829e3567ddf\"), cleanedArgument);\n  };\n  var render = function render() {\n    var header = document.querySelector('.header');\n    pageContent.innerHTML = '';\n    if (header !== null) {\n      header.remove();\n    }\n    preparePage();\n  };\n  render();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageList);\n\n//# sourceURL=webpack://rawg_application/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/displayBuyGame.js":
/*!**********************************!*\
  !*** ./src/js/displayBuyGame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar displayBuyGame = function displayBuyGame(gameData) {\n  var pageDetail = document.querySelector(\".page-detail\");\n  var platforms = gameData.platforms;\n  // let pageDetail = document.querySelector(\".page-detail\");\n  var displayBuyGame = document.querySelector(\".page-detail__buy\");\n  displayBuyGame.classList.add(\"page-detail__buy\");\n  var pageDetailBuyTitle = document.createElement(\"h2\");\n  pageDetailBuyTitle.textContent = \"BUY\";\n  displayBuyGame.append(pageDetailBuyTitle);\n  platforms.map(function (platform) {\n    displayBuyGame.innerHTML += \"\\n      <div class='platform'>\".concat(platform.platform.name, \"</div>\");\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayBuyGame);\n\n//# sourceURL=webpack://rawg_application/./src/js/displayBuyGame.js?");

/***/ }),

/***/ "./src/js/displayGame.js":
/*!*******************************!*\
  !*** ./src/js/displayGame.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar displayGame = function displayGame(gameData) {\n  var pageDetail = document.querySelector(\".page-detail\");\n  var displayGame = document.querySelector(\".page-detail__display\");\n  var name = gameData.name,\n    released = gameData.released,\n    description = gameData.description,\n    rating = gameData.rating,\n    ratings_count = gameData.ratings_count,\n    developers = gameData.developers,\n    platforms = gameData.platforms,\n    publishers = gameData.publishers,\n    genres = gameData.genres,\n    tags = gameData.tags;\n\n  // let pageDetail = document.createElement(\"div\");\n  // pageDetail.classList.add(\"page-detail\");\n\n  var pageDetailHeader = document.createElement(\"div\");\n  pageDetailHeader.classList.add(\"page-detail__header\");\n  var pageDetailTitle = document.createElement(\"h2\");\n  var pageDetailNote = document.createElement(\"p\");\n  var pageDetailReview = document.createElement(\"p\");\n  var pageDetailPlot = document.createElement(\"div\");\n  pageDetailPlot.classList.add(\"page-detail__plot\");\n  pageDetailPlot.innerHTML = description;\n  var pageDetailInfo = document.createElement(\"div\");\n  pageDetailInfo.classList.add(\"page-detail__info\");\n  for (var index = 0; index < 6; index++) {\n    pageDetailInfo.innerHTML += \"\\n    <div>\\n    <h3></h3>\\n    <p></p>\\n    </div>\\n    \";\n  }\n  pageDetailTitle.textContent = name;\n  pageDetailReview.textContent = ratings_count + \" votes\";\n  pageDetailNote.textContent = rating + \" ⭐ -\";\n  pageDetailInfo.children[0].children[0].innerHTML = \"Release Date\";\n  pageDetailInfo.children[0].children[1].innerHTML = released;\n  pageDetailInfo.children[1].children[0].innerHTML = \"Developer\";\n  pageDetailInfo.children[1].children[1].innerHTML = developers[0].name;\n  pageDetailInfo.children[2].children[0].innerHTML = \"Platforms\";\n  pageDetailInfo.children[2].children[1].innerHTML = platforms[0].platform.name;\n  pageDetailInfo.children[3].children[0].innerHTML = \"Publisher\";\n  pageDetailInfo.children[3].children[1].innerHTML = publishers[0].name;\n  pageDetailInfo.children[4].children[0].innerHTML = \"Genre\";\n  pageDetailInfo.children[4].children[1].innerHTML = genres.map(function (genre) {\n    return genre.name + \"&nbsp;\";\n  });\n  pageDetailInfo.children[5].children[0].innerHTML = \"Tags\";\n  pageDetailInfo.children[5].children[1].innerHTML = tags.map(function (tag) {\n    return tag.name + \"&nbsp;\";\n  });\n  pageDetailHeader.append(pageDetailTitle, pageDetailNote, pageDetailReview);\n  displayGame.append(pageDetailHeader, pageDetailPlot, pageDetailInfo);\n  // articleDOM.append(pageDetail);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayGame);\n\n//# sourceURL=webpack://rawg_application/./src/js/displayGame.js?");

/***/ }),

/***/ "./src/js/displayHeroScreenshots.js":
/*!******************************************!*\
  !*** ./src/js/displayHeroScreenshots.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar displayHeroScreenshots = function displayHeroScreenshots(gameData) {\n  var articleDOM = document.querySelector(\".page-details .article\");\n  var pageDetail = document.querySelector(\".page-detail\");\n  var headerTitle = document.querySelector(\".title\");\n  var results = gameData.results;\n  var heroScreenshots = document.querySelector('.hero-screenshot');\n  var heroScreenshotsImg = document.createElement(\"img\");\n  var heroScreenshotsCTA = document.createElement(\"button\");\n  heroScreenshotsCTA.textContent = \"Check Website ➔\";\n  heroScreenshotsImg.src = results[2].image;\n  heroScreenshots.appendChild(heroScreenshotsCTA);\n  heroScreenshots.appendChild(heroScreenshotsImg);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHeroScreenshots);\n\n//# sourceURL=webpack://rawg_application/./src/js/displayHeroScreenshots.js?");

/***/ }),

/***/ "./src/js/displayResults.js":
/*!**********************************!*\
  !*** ./src/js/displayResults.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar displayResults = function displayResults(articles) {\n  var articleDOM = document.querySelector(\".page-details .article\");\n  pageContent.innerHTML = \"\\n      <section class=\\\"page-list \\\">\\n        <div class=\\\"articles auto-grid\\\">Loading...</div>\\n      </section>\";\n  var resultsContent = articles.map(function (article) {\n    return \"<article class=\\\"cardGame\\\">\\n          <div class=\\\"cardGame__header\\\">\\n          <a href=#pagedetail/\".concat(article.id, \">\\n            <img src=\\\"\").concat(article.background_image, \"\\\">\\n            </a>\\n          </div>\\n          <div class=\\\"cardGame__body\\\">\\n            <p>\").concat(article.name, \"</p>\\n            <p>\").concat(article.released, \"</p>\\n          </div>\\n    </article>\\n    \");\n  });\n  var buttonShowMore = document.createElement('button');\n  buttonShowMore.textContent = 'Show more';\n  var resultsContainer = document.querySelector(\".page-list .articles\");\n  resultsContainer.innerHTML = resultsContent.join(\"\\n\");\n  resultsContainer.append(buttonShowMore);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayResults);\n\n//# sourceURL=webpack://rawg_application/./src/js/displayResults.js?");

/***/ }),

/***/ "./src/js/displayScreenshots.js":
/*!**************************************!*\
  !*** ./src/js/displayScreenshots.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar displayScreenshots = function displayScreenshots(gameData) {\n  var pageDetail = document.querySelector(\".page-detail\");\n  var pageDetailScreenshotsTitle = document.createElement(\"h2\");\n  pageDetailScreenshotsTitle.textContent = \"SCREENSHOTS\";\n  var parent = document.createElement(\"div\");\n  parent.classList.add(\"parent\");\n  var firstDiv = document.createElement(\"img\");\n  var secondDiv = document.createElement(\"img\");\n  var thirdDiv = document.createElement(\"img\");\n  firstDiv.classList.add(\"div1\");\n  secondDiv.classList.add(\"div2\");\n  thirdDiv.classList.add(\"div3\");\n  firstDiv.src = gameData.results[0].image;\n  secondDiv.src = gameData.results[1].image;\n  thirdDiv.src = gameData.results[3].image;\n  parent.append(firstDiv, secondDiv, thirdDiv);\n  pageDetail.append(pageDetailScreenshotsTitle, parent);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayScreenshots);\n\n//# sourceURL=webpack://rawg_application/./src/js/displayScreenshots.js?");

/***/ }),

/***/ "./src/js/displayVideo.js":
/*!********************************!*\
  !*** ./src/js/displayVideo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar displayVideo = function displayVideo(argument) {\n  var videoInput = argument.name_original;\n  videoInput.replace(\" \", \"-\");\n  fetch(\"https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=\".concat(videoInput, \"trailer&type=video&key=\").concat(\"AIzaSyCbciqvfjeZelFLl30QQaU0Q0CaJ5y9e1w\")).then(function (response) {\n    return response.json();\n  }).then(function (responseData) {\n    console.log(responseData);\n    playVideo(responseData);\n  });\n};\nvar playVideo = function playVideo(videoID) {\n  var trailer = videoID.items[1];\n  var mainVideo = videoID.items[2];\n  var otherVideos = [];\n  var videoDate = mainVideo.snippet.publishedAt;\n  for (var index = 2; index < 5; index++) {\n    console.log(index);\n    otherVideos.push(videoID.items[index]);\n  }\n  var pageDetail = document.querySelector(\".page-detail\");\n  var videoDiv = document.createElement(\"div\");\n  videoDiv.classList.add(\"video-div\");\n  videoDiv.add;\n  pageDetail.append(videoDiv);\n  videoDiv.innerHTML = \" \\n  <h2>TRAILER</h2>\\n  <div>\\n    <iframe width=\\\"100%\\\" height=\\\"100%\\\" src=\\\"https://www.youtube.com/embed/\".concat(trailer.id.videoId, \"\\\" frameborder=\\\"0\\\"></iframe>\\n  </div>\\n  <h2>YOUTUBE</h2>\\n  <div>\\n    <a target=\\\"_blank\\\" href= \\\"https://www.youtube.com/watch?v=\").concat(mainVideo.id.videoId, \"\\\">\\n      <img src=\\\"\").concat(mainVideo.snippet.thumbnails.high.url, \"\\\">\\n    </a>\\n    <div>\\n      <h3>\").concat(mainVideo.snippet.title, \"</h3>\\n      <p>\").concat(videoDate, \"</p>\\n    </div>\\n  </div>\\n  <div class=\\\"secondary-video\\\">\\n  </div>\\n  \");\n  var secondaryVideo = document.querySelector(\".secondary-video\");\n  for (var _index = 0; _index < otherVideos.length; _index++) {\n    console.log(_index);\n    secondaryVideo.innerHTML += \"\\n      <a target=\\\"_blank\\\" href= \\\"https://www.youtube.com/watch?v=\".concat(otherVideos[_index].id.videoId, \"\\\">\\n        <img src=\\\"\").concat(otherVideos[_index].snippet.thumbnails.high.url, \"\\\">\\n        <h3>\").concat(otherVideos[_index].snippet.title, \"</h3>\\n      </a>\\n    \");\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayVideo);\n\n//# sourceURL=webpack://rawg_application/./src/js/displayVideo.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  'home': _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  'pagelist': _PageList__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://rawg_application/./src/js/routes.js?");

/***/ }),

/***/ "./src/js/showHeader.js":
/*!******************************!*\
  !*** ./src/js/showHeader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar showHeader = function showHeader() {\n  var header = document.querySelector('.header');\n  console.log('showHeader est appelé', header);\n  if (header === null) {\n    console.log('header créé', _header);\n    var _header = document.createElement(\"header\");\n    _header.classList.add(\"header\");\n    _header.setAttribute('id', 'header');\n    var sectionHero = document.createElement(\"section\");\n    var headerWelcome = document.createElement(\"h2\");\n    var headerText = document.createElement(\"p\");\n    var headerWelcomeContent = document.createTextNode(\"Welcome,\");\n    var headerTextContent = document.createTextNode(\"The Hyper Progame is the world's premier event for computer and video games and related products. At The Hyper Progame, the video game industry's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry, For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry, executives, gamers, and social influencers providing unprecdented exposure.\");\n    headerWelcome.appendChild(headerWelcomeContent);\n    headerText.appendChild(headerTextContent);\n    sectionHero.append(headerWelcome, headerText);\n    _header.appendChild(sectionHero);\n    document.body.insertBefore(_header, pageContent);\n  }\n  ;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHeader);\n\n//# sourceURL=webpack://rawg_application/./src/js/showHeader.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rawg_application/./src/style/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;