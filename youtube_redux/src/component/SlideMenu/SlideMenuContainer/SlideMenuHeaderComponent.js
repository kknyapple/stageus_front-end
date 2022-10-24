import React from "react";

export default function SlideMenuHeaderComponent() {
  return (
    <div id="header-menu-start-container">
      <div id="header-menu-bar">
        <button id="button-header-menu-bar">
          <img src={`./images/menu.jpg`} />
        </button>
      </div>
      <div id="header-menu-logo">
        <img src={`./images/logo.jpg`} />
      </div>
    </div>
  );
}
