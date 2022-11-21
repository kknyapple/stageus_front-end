import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { DivTag, ButtonTag } from "../../../style/tag.js";
import { buttonState } from "../../../recoil/common.js";
import SlideMenuNavItemComponent from "./SlideMenuNavItemComponent.js";

const SlideMenuBox = styled.div`
  background-color: rgb(255, 255, 255);
  width: 245px;
  height: 100vh;
  position: fixed;
  animation-name: open-bar;
  animation-duration: 0.2s;
  z-index: 4;
`;

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

const SlideMenuItemBox = styled.div`
  padding-top: 10px;
`;

export default function SlideMenuContainerComponent() {
  const [button, setButton] = useRecoilState(buttonState);

  const menusData = [
    {
      id: "0",
      img: "menu0",
      name: "홈",
    },
    {
      id: "1",
      img: "menu1",
      name: "탐색",
    },
    {
      id: "2",
      img: "menu2",
      name: "Shorts",
    },
    {
      id: "3",
      img: "menu3",
      name: "구독",
    },
    {
      id: "4",
      img: "menu4",
      name: "Originals",
    },
    {
      id: "5",
      img: "menu5",
      name: "YouTube Music",
    },
    {
      id: "6",
      img: "menu6",
      name: "보관함",
    },
    {
      id: "7",
      img: "menu7",
      name: "오프라인 저장",
    },
  ];

  return (
    <SlideMenuBox>
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
      <SlideMenuItemBox>
        {menusData.map((menu) => {
          return <SlideMenuNavItemComponent key={menu.id} menu={menu} />;
        })}
      </SlideMenuItemBox>
    </SlideMenuBox>
  );
}
