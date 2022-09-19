import addHeader from "./header/header.js";
import createVideo from "./video/video.js";
import createMenu from "./menu/menu.js";
import openMenuBar from "./headerMenu/menuBar.js";
import createHeaderMenu from "./headerMenu/headerMenu.js";
import svg from "./svg.js";

addHeader();

openMenuBar();

const menuNames = [
  "홈",
  "탐색",
  "Shorts",
  "구독",
  "Originals",
  "YouTube Music",
  "보관함",
  "오프라인 저장",
];
const images = [
  "img0",
  "img2",
  "img3",
  "img4",
  "img5",
  "img0",
  "img3",
  "img4",
  "img5",
  "img1",
  "img2",
  "img3",
  "img4",
];

menuNames.forEach((name, index) => {
  createMenu(svg[index], name, index);
});

menuNames.forEach((name, index) => {
  createHeaderMenu(svg[index], name, index);
});

images.forEach((img, index) => createVideo(img, index));
