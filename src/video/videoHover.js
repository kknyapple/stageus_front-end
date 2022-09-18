const videoHover = function () {
  const video = document.getElementById("videos");
  video.addEventListener("mouseover", () => {
    //document.getElementById("video1").style.height = "110%";
  });
  video.addEventListener("mouseleave", () => {
    //document.getElementById("video1").style.height = "200px";
  });
};

export default videoHover;
