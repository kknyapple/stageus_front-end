import React from "react";
import GrayBoxComponent from "./GrayBoxComponent";
import WhiteBoxComponent from "./WhiteBoxComponent";

export default function SideNavComponent(props) {
  const menuInfoObj = {
    name: [
      "홈",
      "탐색",
      "Shorts",
      "구독",
      "Originals",
      "YouTube Music",
      "보관함",
      "오프라인 저장",
    ],
    id: ["0", "1", "2", "3", "4", "5", "6", "7"],
    img: [
      "menu0",
      "menu1",
      "menu2",
      "menu3",
      "menu4",
      "menu5",
      "menu6",
      "menu7",
    ],
  };
  const nav = props.nav;

  return (
    <div id="menu-bar-list">
      {nav == true ? <GrayBoxComponent /> : null}
      {nav == true ? (
        <WhiteBoxComponent
          menuInfoObj={menuInfoObj}
          nav={nav}
          navClickHandler={props.navClickHandler}
        />
      ) : null}
    </div>
  );
}
