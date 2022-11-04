import React from "react";
import { useSelector } from "react-redux";
import { buttonState } from "../../slideMenuState";
import { useRecoilValue } from "recoil";

import SlideMenuContainer from "./SlideMenuContainer/SlideMenuContainerComponent";

export default function SlideMenuComponent() {
  //const button = useSelector((state) => state.slideMenuReducer.button);
  const button = useRecoilValue(buttonState);
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
