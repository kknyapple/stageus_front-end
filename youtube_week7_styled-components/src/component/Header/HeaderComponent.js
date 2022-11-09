import React from "react";
import styled from "styled-components";

import HeaderEndContainerComponent from "./HeaderEndContainerComponent";
import HeaderMiddleContainerComponent from "./HeaderMiddleContainerComponent";
import HeaderStartContainerComponent from "./HeaderStartContainerComponent";
import { HeaderTag } from "../../style/tag";

const Header = styled(HeaderTag)`
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
