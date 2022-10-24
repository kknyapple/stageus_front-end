import React from "react";
import HeaderEndContainerComponent from "./HeaderEndContainerComponent";
import HeaderMiddleContainerComponent from "./HeaderMiddleContainerComponent";
import HeaderStartContainerComponent from "./HeaderStartContainerComponent";

export default function HeaderComponent(props) {
  const headerImg = ["menu", "logo", "search", "voice", "video", "notice"];
  const nav = props.nav;

  React.useEffect(() => {
    document
      .getElementById("menuBar")
      .addEventListener("click", props.navClickHandler);
  }, []); //이벤트 스케쥴러로 인해 이벤트는 따로 실행됨 //1.이벤트 해제 2.[] -> 한번만 실행되도록

  return (
    <header id="header">
      <HeaderStartContainerComponent />
      <HeaderMiddleContainerComponent />
      <HeaderEndContainerComponent />
    </header>
  );
}
