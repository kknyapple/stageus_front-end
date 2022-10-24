import React from "react";
import SlideMenuNavItemComponent from "./SlideMenuNavItemComponent";

export default function SlideMenuNavContainerComponent() {
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

  const whiteBoxOnMouseOver = (e) => {
    const eventTarget = e.target.parentNode;
    if (eventTarget.id == "header-menu") {
      console.log("side over");
      eventTarget.style.backgroundColor = "lightgray";
    }
  };

  const whiteBoxOnMouseOut = (e) => {
    const eventTarget = e.target.parentNode;

    if (eventTarget.id == "header-menu") {
      console.log("side out");
      eventTarget.style.backgroundColor = "transparent";
    }
  };

  React.useEffect(() => {
    document
      .getElementById("header-menus")
      .addEventListener("mouseover", whiteBoxOnMouseOver);

    document
      .getElementById("header-menus")
      .addEventListener("mouseout", whiteBoxOnMouseOut);
  }, []);

  return (
    <div id="header-menus">
      <SlideMenuNavItemComponent {...menuInfoObj} />
    </div>
  );
}
