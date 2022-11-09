import React from "react";
import styled from "styled-components";

import SlideMenuHeaderComponent from "./SlideMenuHeaderComponent";
import SlideMenuNavContainerComponent from "./SlideMenuNavContainerComponent";

const SlideMenuBox = styled.div`
  background-color: rgb(255, 255, 255);
  width: 245px;
  height: 100vh;
  position: fixed;
  animation-name: open-bar;
  animation-duration: 0.2s;
  z-index: 4;
`;

export default function SlideMenuContainerComponent() {
  return (
    <SlideMenuBox>
      <SlideMenuHeaderComponent />
      <SlideMenuNavContainerComponent />
    </SlideMenuBox>
  );
}
