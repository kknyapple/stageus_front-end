import React from "react";
import NavComponent from "./Nav/NavComponent";
import VideoComponent from "./Video/VideoComponent";

import { useSelector } from "react-redux";

export default function ContainerComponent() {
  const page = useSelector((state) => state.navReducer.page);

  return (
    <main id="container">
      <NavComponent />
      {(page == 0 && <VideoComponent />) ||
        (page == 1 && <div>Component1</div>) ||
        (page == 2 && <div>Component2</div>) ||
        (page == 3 && <div>Component3</div>) ||
        (page == 4 && <div>Component4</div>) ||
        (page == 5 && <div>Component5</div>) ||
        (page == 6 && <div>Component6</div>) ||
        (page == 7 && <div>Component7</div>)}
    </main>
  );
}
