const createVideo = function (img) {
  const videos = document.getElementById("videos");
  const video = document.createElement("div");
  const thumbnail = document.createElement("div");
  const videoContent = document.createElement("div");
  const videoContentPar = document.createElement("p");
  const thumbnailImg = document.createElement("img");

  video.setAttribute("id", "video");
  thumbnail.setAttribute("id", "thumbnail");
  videoContent.setAttribute("id", "video-content");

  thumbnailImg.src = `../images/${img}.jpg`;
  videoContentPar.innerHTML = "동영상";
  thumbnailImg.style.width = "250px";
  thumbnailImg.style.height = "150px";

  videos.appendChild(video);
  video.appendChild(thumbnail);
  thumbnail.appendChild(thumbnailImg);
  video.appendChild(videoContent);
  videoContent.appendChild(videoContentPar);
};

export default createVideo;
