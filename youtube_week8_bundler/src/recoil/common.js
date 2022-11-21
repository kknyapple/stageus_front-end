import { atom } from "recoil";

export const buttonState = atom({
  //navStart
  key: "guideButton",
  default: false,
});

export const navState = atom({
  //pageState, tabState
  key: "menu",
  default: "home", // home, search, shorts, describe, originals, music, storage, offline
});

export const setVideoData = atom({
  key: "videoData",
  default: null,
});

export const setAccountImg = atom({
  key: "accountImg",
  default: null,
});
