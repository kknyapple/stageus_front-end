import React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { getVideoData } from "../../../atom";
import VideoItemComponent from "./VideoItemComponent";

export default function VideoComponent() {
  const [data, setData] = useRecoilState(getVideoData);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <div id="videos">
      {data.map((video) => {
        return <VideoItemComponent key={video.id} video={video} />;
      })}
    </div>
  );
}
