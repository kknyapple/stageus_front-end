const videoHover = function (id) {
  const video = document.getElementById(`video${id}`);
  video.addEventListener("mouseover", () => {
    video.style.transform = "scale(1.1)";
    video.style.top = "-10px";
    video.style.transition = "0.5s";
    video.style.zIndex = "1";
  });
  video.addEventListener("mouseleave", () => {
    video.style.transform = "scale(1)";
    video.style.top = "0px";
    video.style.transition = "0.2s";
    video.style.zIndex = "0";
  });
};
