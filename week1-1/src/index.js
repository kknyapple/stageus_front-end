addHeader();
addHeaderMenu();
openMenuBar();

document.getElementById("menu-bar-list").style.display = "none";

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
  "img0",
  "img0",
  "img0",
  "img0",
  "img0",
  "img0",
  "img0",
  "img0",
  "img0",
  "img0",
];

const contents = [
  "content0",
  "content0",
  "content0",
  "content0",
  "content0",
  "content0",
  "content0",
  "content0",
  "content0",
  "content0",
  "content0",
];

menuNames.forEach((name, index) => {
  createMenu(svg[index], name, index);
});

menuNames.forEach((name, index) => {
  createHeaderMenu(svg[index], name, index);
});

images.forEach((img, index) => createVideo(img, contents[index], index));
