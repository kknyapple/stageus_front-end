import React from "react";

export default function HeaderMiddleContainerComponent() {
  return (
    <div id="header-middle-container">
      <div id="search">
        <input type="text" placeholder="검색" />
        <button id="searchButton">
          <img src={`./images/search.jpg`} />
        </button>
        <button id="voiceButton">
          <img src={`./images/voice.jpg`} />
        </button>
      </div>
    </div>
  );
}
