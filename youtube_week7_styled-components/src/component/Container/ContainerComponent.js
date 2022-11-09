import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import NavComponent from "./Nav/NavComponent";
import VideoComponent from "./Video/VideoComponent";
import MusicComponent from "./Music/MusicComponent";
import SearchComponent from "./Search/SearchComponent";
import ShortsComponent from "./Shorts/ShortsComponent";
import DescribeComponent from "./Describe/DescribeComponent";
import OriginalsComponent from "./Originals/OriginalsComponent";
import StorageComponent from "./Storage/StorageComponent";
import OfflineComponent from "./Offline/OfflineComponent";
import { navState } from "../../recoil/common.js";

const Box = styled.div`
  display: flex;
`;

export default function ContainerComponent() {
  const menu = useRecoilValue(navState);
  return (
    <Box>
      <NavComponent />
      {(menu == "home" && <VideoComponent />) ||
        (menu == "search" && <SearchComponent />) ||
        (menu == "shorts" && <ShortsComponent />) ||
        (menu == "describe" && <DescribeComponent />) ||
        (menu == "originals" && <OriginalsComponent />) ||
        (menu == "music" && <MusicComponent />) ||
        (menu == "storage" && <StorageComponent />) ||
        (menu == "offline" && <OfflineComponent />)}
    </Box>
  );
}
