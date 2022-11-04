import React from "react";
import SlideMenuContainer from "./SlideMenuContainer/SlideMenuContainerComponent";

import { useSelector } from "react-redux";

export default function SlideMenuComponent() {
  const button = useSelector((state) => state.slideMenuReducer.button);

  return (
    <div id="menu-bar-list">
      {button == true ? (
        <React.Fragment>
          <div id="box-1"></div>
          <SlideMenuContainer />
        </React.Fragment>
      ) : null}
    </div>
  );
}
