import React from "react";
import styled from "styled-components";

import { buttonState } from "../../recoil/common";
import { useRecoilValue } from "recoil";
import SlideMenuContainerComponent from "./SlideMenuContainer/SlideMenuContainerComponent";

const Background = styled.div`
  background-color: rgba(31, 31, 31, 0.545);
  width: 100vw;
  height: 100vh;
  position: fixed;
  animation-name: close-bar;
  animation-name: darker;
  animation-duration: 0.2s;
  z-index: 3;
`;

export default function SlideMenuComponent() {
  const button = useRecoilValue(buttonState);

  return (
    <React.Fragment>
      {button == true ? (
        <React.Fragment>
          <Background />
          <SlideMenuContainerComponent />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
