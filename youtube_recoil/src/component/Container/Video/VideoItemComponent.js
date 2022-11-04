import React from "react";
import { useState } from "react";

import useVideo from "./useVideo.js";

export default function VideoItemComponent(props) {
  const { video } = props;
  const [videoState, setVideoState] = useVideo();
  //const [videoState, setVideoState] = useState(true);

  const videoOnClickHandler = (e) => {
    const eventTarget = e.currentTarget;
    setVideoState(!videoState);
    if (videoState === true) {
      eventTarget.style.transform = "scale(1.1)";
      eventTarget.style.top = "-10px";
    } else if (videoState === false) {
      eventTarget.style.top = "0px";
      eventTarget.style.transform = "scale(1)";
    }
  };

  return (
    <div id={`video${video.id}`} onClick={videoOnClickHandler}>
      <div id="video">
        <div id="thumbnail">
          <img src={`./images/${video.img}.jpg`} />
        </div>
        <div id="video-content">
          <img src={`./images/${video.content}.jpg`} />
        </div>
      </div>
    </div>
  );
}
