import React from "react";
import NavComponent from "./Nav/NavComponent";
import VideoComponent from "./Video/VideoComponent";

export default function ContainerComponent() {
  return (
    <main id="container">
      <NavComponent />
      <VideoComponent />
    </main>
  );
}
