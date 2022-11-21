import React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { setVideoData } from "../../../../recoil/common.js";
import { videoData } from "../../../../data/videoData";
import VideoItemComponent from "./VideoItemComponent";
import { MainTag } from "../../../../style/tag";

const VideoBox = styled(MainTag)`
  flex-wrap: wrap;

  background-color: rgb(242, 242, 242);
  background-clip: content-box;
`;

export default function VideoComponent() {
  const [data, setData] = useRecoilState(setVideoData);

  useEffect(() => {
    setData(videoData);
  }, [data]);

  return (
    <VideoBox>
      {data &&
        data.map((video) => {
          return <VideoItemComponent key={video.id} video={video} />;
        })}
    </VideoBox>
  );
}
