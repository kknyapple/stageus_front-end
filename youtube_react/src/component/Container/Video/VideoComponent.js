import React from "react";
import VideoItemComponent from "./VideoItemComponent";

export default function VideoComponent(props) {
  const videoInfoObj = {
    id: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    img: [
      "img0",
      "img0",
      "img0",
      "img0",
      "img0",
      "img0",
      "img0",
      "img0",
      "img0",
      "img0",
      "img0",
      "img0",
      "img0",
    ],
    content: [
      "content0",
      "content0",
      "content0",
      "content0",
      "content0",
      "content0",
      "content0",
      "content0",
      "content0",
      "content0",
      "content0",
      "content0",
      "content0",
    ],
  };

  const [videoScale, setVideoScale] = React.useState(false);

  const videoOnClickHandler = (e) => {
    const eventTarget = e.target.parentNode.parentNode;
    console.log(videoScale);
    setVideoScale(!videoScale);
    if (eventTarget.id == "video") {
      if (videoScale === true) {
        // console.log("true");
        // setVideoScale(false);
        eventTarget.parentNode.style.transform = "scale(1.1)";
        eventTarget.parentNode.style.top = "-10px";
      } else if (videoScale === false) {
        // console.log("false");
        // setVideoScale(true);
        eventTarget.parentNode.style.top = "0px";
        eventTarget.parentNode.style.transform = "scale(1)";
      }
    }
  };

  React.useEffect(() => {
    document
      .getElementById("videos")
      .addEventListener("click", videoOnClickHandler);
    return () => {
      document
        .getElementById("videos")
        .removeEventListener("click", videoOnClickHandler);
    };
  });

  return (
    <div id="videos">
      {videoInfoObj.id.map((a, index) => {
        return (
          <VideoItemComponent key={index} index={index} {...videoInfoObj} />
        );
      })}
    </div>
  );
}
