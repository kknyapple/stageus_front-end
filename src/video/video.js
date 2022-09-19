import videoHover from "./videoHover.js";

const createVideo = function (img, id) {
  const videos = document.getElementById("videos");
  const videoId = document.createElement("div");
  const video = document.createElement("div");
  const thumbnail = document.createElement("div");
  const videoContent = document.createElement("div");
  const videoContentPar = document.createElement("p");
  const thumbnailImg = document.createElement("img");

  videoId.setAttribute("id", `video${id}`);
  video.setAttribute("id", "video");
  thumbnail.setAttribute("id", "thumbnail");
  videoContent.setAttribute("id", "video-content");

  videos.appendChild(videoId);
  videoId.appendChild(video);
  video.appendChild(thumbnail);
  thumbnail.appendChild(thumbnailImg);
  video.appendChild(videoContent);
  videoContent.appendChild(videoContentPar);

  thumbnailImg.src = `../images/${img}.jpg`;
  videoContentPar.innerHTML = "동영상";
  // thumbnailImg.style.width = `${thumbnail.style.width}`;
  // thumbnailImg.style.height = `${thumbnail.style.height}`;

  videoHover(id);
};

export default createVideo;
