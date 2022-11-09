import { atom } from "recoil";

export const buttonState = atom({
  key: "guideButton",
  default: false,
});

export const navState = atom({
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
