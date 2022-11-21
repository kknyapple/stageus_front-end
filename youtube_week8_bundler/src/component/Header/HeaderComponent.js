import React from "react";
import styled from "styled-components";

import HeaderEndContainerComponent from "./HeaderEndContainerComponent";
import HeaderMiddleContainerComponent from "./HeaderMiddleContainerComponent";
import HeaderStartContainerComponent from "./HeaderStartContainerComponent";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  height: 60px;
  top: 0px;
  background-color: white;
  z-index: 2;
`;

export default function HeaderComponent() {
  return (
    <Header>
      <HeaderStartContainerComponent />
      <HeaderMiddleContainerComponent />
      <HeaderEndContainerComponent />
    </Header>
  );
}
