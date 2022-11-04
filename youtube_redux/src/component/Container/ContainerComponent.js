import React from "react";
import NavComponent from "./Nav/NavComponent";
import VideoComponent from "./Video/VideoComponent";

import { useSelector } from "react-redux";

export default function ContainerComponent() {
  const menu = useSelector((state) => state.navReducer.menu);

  return (
    <main id="container">
      <NavComponent />
      {(menu == "home" && <VideoComponent />) ||
        (menu == "search" && <div>Component1</div>) ||
        (menu == "shorts" && <div>Component2</div>) ||
        (menu == "describe" && <div>Component3</div>) ||
        (menu == "originals" && <div>Component4</div>) ||
        (menu == "music" && <div>Component5</div>) ||
        (menu == "storage" && <div>Component6</div>) ||
        (menu == "offline" && <div>Component7</div>)}
    </main>
  );
}
