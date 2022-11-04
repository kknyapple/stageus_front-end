import React from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import SlideMenuHeaderComponent from "./SlideMenuHeaderComponent";
import SlideMenuNavContainerComponent from "./SlideMenuNavContainerComponent";

import { buttonState } from "../../../slideMenuState";

export default function SlideMenuContainerComponent() {
  const [button, setButton] = useRecoilState(buttonState);

  React.useEffect(() => {
    document.getElementById("header-menu-bar").addEventListener("click", () => {
      setButton(!button);
    });
  }, [button]);

  return (
    <div id="box-2">
      <SlideMenuHeaderComponent />
      <SlideMenuNavContainerComponent />
    </div>
  );
}
