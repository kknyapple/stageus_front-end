import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { buttonState } from "../../../recoil/common.js";
import { DivTag, ButtonTag } from "../../../style/tag.js";

const HeaderBox = styled(DivTag)`
  height: 60px;
`;

const SlideMenuButton = styled(ButtonTag)`
  border-radius: 50%;
`;

const SlideMenuButtonImg = styled.img`
  height: 25px;
  width: auto;
`;

const SlideMenuLogo = styled(DivTag)`
  padding-left: 22px;
  cursor: pointer;
`;

const SlideMenuLogoImg = styled.img`
  height: 40px;
  width: auto;
`;

export default function SlideMenuHeaderComponent() {
  const [button, setButton] = useRecoilState(buttonState);

  return (
    <HeaderBox>
      <SlideMenuButton
        onClick={() => {
          setButton(!button);
        }}
      >
        <SlideMenuButtonImg src={`./images/menu.jpg`} />
      </SlideMenuButton>
      <SlideMenuLogo>
        <SlideMenuLogoImg src={`./images/logo.jpg`} />
      </SlideMenuLogo>
    </HeaderBox>
  );
}
