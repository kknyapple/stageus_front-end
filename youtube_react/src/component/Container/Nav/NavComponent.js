import React from "react";
import NavItemComponent from "./NavItemComponent";

export default function NavComponent(props) {
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

  const navOnMouseOver = (e) => {
    const eventTarget = e.target;

    console.log("over");

    if (eventTarget.id || eventTarget.parentNode.id == "button-menu") {
      eventTarget.parentNode.style.backgroundColor = "lightgray";
    }
  };

  const navOnMouseOut = (e) => {
    const eventTarget = e.target;

    console.log("out");

    if (eventTarget.id || eventTarget.parentNode.id == "button-menu") {
      eventTarget.parentNode.style.backgroundColor = "transparent";
    }
  };

  React.useEffect(() => {
    document
      .getElementById("menus")
      .addEventListener("mouseover", navOnMouseOver);

    document
      .getElementById("menus")
      .addEventListener("mouseout", navOnMouseOut);
  }, []);

  return (
    <nav id="menus">
      {menuInfoObj.id.map((a, index) => {
        return <NavItemComponent key={index} {...menuInfoObj} index={index} />;
      })}
    </nav>
  );
}
