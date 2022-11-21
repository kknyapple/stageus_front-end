import React from "react";
import styled from "styled-components";

import useVideo from "../../../../hook/useVideo";

const Video = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 18vw;
  height: auto;
  margin-top: 35px;
  margin-left: 20px;
  margin-right: 20px;
  //background-color: rgb(252, 193, 193);

  @media screen and (max-width: 960px) {
    width: 22vw;
    height: auto;
  }

  @media screen and (max-width: 792px) {
    width: 40vw;
    height: auto;
  }

  @media screen and (max-width: 600px) {
    width: 80vw;
    height: auto;
  }
`;

const Thumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: auto;
`;

const ThumbnailImg = styled.img`
  max-width: 100%;
  max-height: auto;
`;

const VideoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: auto;
`;

const VideoContentImg = styled.img`
  max-width: 100%;
  max-height: auto;
`;

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
    <Video id={`video${video.id}`} onClick={videoOnClickHandler}>
      <Thumbnail>
        <ThumbnailImg src={`./images/${video.img}.jpg`} />
      </Thumbnail>
      <VideoContent>
        <VideoContentImg src={`./images/${video.content}.jpg`} />
      </VideoContent>
    </Video>
  );
}
