import React from "react";
import { useState } from "react";

const useVideo = () => {
  const [videoScale, setVideoScale] = useState(true);

  const videoCondition = (scale) => {
    setVideoScale(!scale);
  };

  return [videoScale, videoCondition];
};

export default function VideoItemComponent(props) {
  const id = props.id;
  const img = props.img;
  const content = props.content;
  // const [videoState, setVideoState] = useVideo();
  const [videoState, setVideoState] = useState(true);

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
    <div id={`video${props.index}`} onClick={videoOnClickHandler}>
      <div id="video">
        <div id="thumbnail">
          <img src={`./images/${img[props.index]}.jpg`} />
        </div>
        <div id="video-content">
          <img src={`./images/${content[props.index]}.jpg`} />
        </div>
      </div>
    </div>
  );
}
