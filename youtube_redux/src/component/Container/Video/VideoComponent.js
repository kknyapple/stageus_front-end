import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showVideo } from "../../../action/action";

import VideoItemComponent from "./VideoItemComponent";

export default function VideoComponent() {
  const data = useSelector((state) => state.dataReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showVideo(data));
  }, [dispatch]);

  return (
    <div id="videos">
      {data.map((video) => {
        return <VideoItemComponent key={video.id} video={video} />;
      })}
    </div>
  );
}
