import React from "react";
import SlideMenuHeaderComponent from "./SlideMenuHeaderComponent";
import SlideMenuNavContainerComponent from "./SlideMenuNavContainerComponent";

import { useDispatch } from "react-redux";
import { closeSlideMenu } from "../../../action/action";

export default function SlideMenuContainerComponent() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.getElementById("header-menu-bar").addEventListener("click", () => {
      dispatch(closeSlideMenu());
    });
  }, [dispatch]);

  return (
    <div id="box-2">
      <SlideMenuHeaderComponent />
      <SlideMenuNavContainerComponent />
    </div>
  );
}
