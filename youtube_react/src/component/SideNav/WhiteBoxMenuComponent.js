import React from "react";
import WhiteBoxMenuItemComponent from "./WhiteBoxMenuItemComponent";

export default function WhiteBoxMenuComponent(props) {
  const menuInfoObj = props.menuInfoObj;

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
      <WhiteBoxMenuItemComponent {...menuInfoObj} />
    </div>
  );
}
