import React from "react";
import HeaderEndContainerComponent from "./HeaderEndContainerComponent";
import HeaderMiddleContainerComponent from "./HeaderMiddleContainerComponent";
import HeaderStartContainerComponent from "./HeaderStartContainerComponent";

import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { buttonState } from "../../slideMenuState";

export default function HeaderComponent() {
  const [button, setButton] = useRecoilState(buttonState);

  React.useEffect(() => {
    document.getElementById("menuBar").addEventListener("click", () => {
      setButton(!button);
    });
  }, [button]);

  return (
    <header id="header">
      <HeaderStartContainerComponent />
      <HeaderMiddleContainerComponent />
      <HeaderEndContainerComponent />
    </header>
  );
}
