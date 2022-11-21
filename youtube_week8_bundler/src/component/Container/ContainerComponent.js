import React from "react";
import styled from "styled-components";

import NavComponent from "./Nav/NavComponent";
import MainComponent from "./Main/MainComponent";

const Box = styled.div`
  display: flex;
`;

export default function ContainerComponent() {
  return (
    <Box>
      <NavComponent />
      <MainComponent />
    </Box>
  );
}
