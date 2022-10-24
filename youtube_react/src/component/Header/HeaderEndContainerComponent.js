import React from "react";

export default function HeaderEndContainerComponent() {
  return (
    <div id="header-end-container">
      <div id="makingVideo">
        <button id="makingVideoButton">
          <img src={`./images/video.jpg`} />
        </button>
      </div>
      <div id="notice">
        <button id="noticeButton">
          <img src={`./images/notice.jpg`} />
        </button>
      </div>
      <div id="account">
        <button id="accountButton">
          <img
            height="30px"
            width="30px"
            src="https://yt3.ggpht.com/yti/AJo0G0mVxKqYGsPhVMgrMEvuRqrIhBhBGR_RzdTptQ=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </button>
      </div>
    </div>
  );
}
