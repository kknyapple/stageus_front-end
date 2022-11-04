import { useState } from "react";

const useVideo = () => {
  const [videoScale, setVideoScale] = useState(true);

  const videoCondition = () => {
    if (videoScale == true) setVideoScale(false);
    else if (videoScale == false) setVideoScale(true);
  };

  return [videoScale, videoCondition];
};

export default useVideo;
