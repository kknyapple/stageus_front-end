import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { buttonState } from "../../recoil/common.js";
import { DivTag, ButtonTag } from "../../style/tag.js";

const HeaderStartBox = styled(DivTag)`
  padding-left: 11px;
  padding-right: 11px;
`;

const GuideMenuButton = styled(ButtonTag)`
  height: 60px;
  width: 60px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 50%;
`;

const GuideMenuButtonImg = styled.img`
  height: 32px;
  width: auto;
`;

const Logo = styled(DivTag)`
  padding-right: 15px;
  width: 100px;
  cursor: pointer;
  height: 60px;
  width: 135px;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
`;

export default function HeaderStartContainerComponent() {
  const [button, setButton] = useRecoilState(buttonState);

  return (
    <HeaderStartBox>
      <GuideMenuButton
        onClick={() => {
          setButton(!button);
        }}
      >
        <GuideMenuButtonImg src="./images/menu.jpg" />
      </GuideMenuButton>
      <Logo>
        <LogoImg src="./images/logo.jpg" />
      </Logo>
    </HeaderStartBox>
  );
}
