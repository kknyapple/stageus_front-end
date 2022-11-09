import React from "react";
import styled from "styled-components";

import SlideMenuNavItemComponent from "./SlideMenuNavItemComponent";

const SlideMenuItemBox = styled.div`
  padding-top: 10px;
`;

export default function SlideMenuNavContainerComponent() {
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
    <SlideMenuItemBox>
      {menusData.map((menu) => {
        return <SlideMenuNavItemComponent key={menu.id} menu={menu} />;
      })}
    </SlideMenuItemBox>
  );
}
