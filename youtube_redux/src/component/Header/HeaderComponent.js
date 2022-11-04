import React from "react";
import HeaderEndContainerComponent from "./HeaderEndContainerComponent";
import HeaderMiddleContainerComponent from "./HeaderMiddleContainerComponent";
import HeaderStartContainerComponent from "./HeaderStartContainerComponent";

import { useDispatch } from "react-redux";
import { openSlideMenu } from "../../action/action";

export default function HeaderComponent() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.getElementById("menuBar").addEventListener("click", () => {
      dispatch(openSlideMenu());
    });
  }, [dispatch]);

  return (
    <header id="header">
      <HeaderStartContainerComponent />
      <HeaderMiddleContainerComponent />
      <HeaderEndContainerComponent />
    </header>
  );
}
