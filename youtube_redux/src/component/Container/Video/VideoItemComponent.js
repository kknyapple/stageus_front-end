import React from "react";

export default function VideoItemComponent(props) {
  const id = props.id;
  const img = props.img;
  const content = props.content;

  return (
    <div id={`video${props.index}`}>
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
