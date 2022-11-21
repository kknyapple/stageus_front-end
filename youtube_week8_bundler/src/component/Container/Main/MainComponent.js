import React from "react";
import { useRecoilValue } from "recoil";

import VideoComponent from "./Video/VideoComponent";
import MusicComponent from "./Music/MusicComponent";
import SearchComponent from "./Search/SearchComponent";
import ShortsComponent from "./Shorts/ShortsComponent";
import DescribeComponent from "./Describe/DescribeComponent";
import OriginalsComponent from "./Originals/OriginalsComponent";
import StorageComponent from "./Storage/StorageComponent";
import OfflineComponent from "./Offline/OfflineComponent";
import { navState } from "../../../recoil/common";

const MainComponent = () => {
  const menu = useRecoilValue(navState);
  return (
    <React.Fragment>
      {(menu == "home" && <VideoComponent />) ||
        (menu == "search" && <SearchComponent />) ||
        (menu == "shorts" && <ShortsComponent />) ||
        (menu == "describe" && <DescribeComponent />) ||
        (menu == "originals" && <OriginalsComponent />) ||
        (menu == "music" && <MusicComponent />) ||
        (menu == "storage" && <StorageComponent />) ||
        (menu == "offline" && <OfflineComponent />)}
    </React.Fragment>
  );
};

export default MainComponent;
