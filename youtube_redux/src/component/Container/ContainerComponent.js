import React from "react";
import NavComponent from "./Nav/NavComponent";
import VideoComponent from "./Video/VideoComponent";

import { useSelector } from "react-redux";

export default function ContainerComponent() {
  const page = useSelector((state) => state.navReducer.page);

  return (
    <main id="container">
      <NavComponent />
      {page == 0 ? <VideoComponent /> : <div>{`page${page}`}</div>}
    </main>
  );
}
