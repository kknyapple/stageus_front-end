import { atom } from "recoil";
import { videoData } from "./data/videoData.js";

export const buttonState = atom({
  key: "btn",
  default: false,
});

export const navState = atom({
  key: "menu",
  default: "home",
});

export const getVideoData = atom({
  key: "video",
  default: videoData,
});
