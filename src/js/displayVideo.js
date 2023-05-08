const displayVideo = (argument) => {
  let videoInput = argument.name_original;
  videoInput.replace(" ", "-");

  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${videoInput}trailer&type=video&key=${process.env.YT_API}`
  )
    .then((response) => response.json())
    .then((responseData) => {
      playVideo(responseData);
    });
};

const playVideo = (videoID) => {
  const trailer = videoID.items[1];
  const mainVideo = videoID.items[2];
  const otherVideos = [];
  const videoDate = mainVideo.snippet.publishedAt;

  for (let index = 2; index < 5; index++) {
    otherVideos.push(videoID.items[index]);
  }

  const pageDetail = document.querySelector(".page-detail");
  const videoDiv = document.createElement("div");
  videoDiv.classList.add("video-div");
  videoDiv.add;
  pageDetail.append(videoDiv);

  videoDiv.innerHTML = ` 
  <h2>TRAILER</h2>
  <div>
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${trailer.id.videoId}" frameborder="0"></iframe>
  </div>
  <h2>RELATED VIDEOS</h2>
  <div>
    <a target="_blank" href= "https://www.youtube.com/watch?v=${mainVideo.id.videoId}">
      <img src="${mainVideo.snippet.thumbnails.high.url}">
    </a>
    <div>
      <h3>${mainVideo.snippet.title}</h3>
      <p>${videoDate}</p>
    </div>
  </div>
  <div class="secondary-video">
  </div>
  `;
  const secondaryVideo = document.querySelector(".secondary-video");
  for (let index = 0; index < otherVideos.length; index++) {
    secondaryVideo.innerHTML += `
      <a target="_blank" href= "https://www.youtube.com/watch?v=${otherVideos[index].id.videoId}">
        <img src="${otherVideos[index].snippet.thumbnails.high.url}">
        <p>${otherVideos[index].snippet.title}</p>
      </a>
    `;
  }
};

export default displayVideo;
