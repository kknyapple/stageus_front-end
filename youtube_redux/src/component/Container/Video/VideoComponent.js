import React from "react";
import VideoItemComponent from "./VideoItemComponent";

export default function VideoComponent() {
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
