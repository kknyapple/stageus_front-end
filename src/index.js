import createVideo from "./video/video.js";
import createMenu from "./menu/menu.js";
import openMenuBar from "./headerMenu/menuBar.js";
import hoveringMenu from "./menu/menuHover.js";
import createHeaderMenu from "./headerMenu/headerMenu.js";

openMenuBar();

//hoveringMenu();
// let menuBar = document.getElementById("header");
// menuBar.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("click");
// });

const svg1 = `<svg
viewBox="0 0 24 24"
preserveAspectRatio="xMidYMid meet"
focusable="false"
class="style-scope yt-icon"
style="
  pointer-events: none;
  display: block;
  width: 36px;
  height: 26px;
"
>
<g class="style-scope yt-icon">
  <path
    d="M4,10V21h6V15h4v6h6V10L12,3Z"
    class="style-scope yt-icon"
  ></path>
</g>
</svg>`;
const svg2 = `            <svg
viewBox="0 0 24 24"
preserveAspectRatio="xMidYMid meet"
focusable="false"
class="style-scope yt-icon"
style="
  pointer-events: none;
  display: block;
  width: 36px;
  height: 26px;
"
>
<g class="style-scope yt-icon">
  <path
    d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
    class="style-scope yt-icon"
  ></path>
</g>
</svg>`;
const svg3 = `            <svg
viewBox="0 0 24 24"
preserveAspectRatio="xMidYMid meet"
focusable="false"
class="style-scope yt-icon"
style="
  pointer-events: none;
  display: block;
  width: 36px;
  height: 26px;
"
>
<g
  height="24"
  viewBox="0 0 24 24"
  width="24"
  class="style-scope yt-icon"
>
  <path
    d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
    class="style-scope yt-icon"
  ></path>
</g>
</svg>`;
const svg4 = `
<svg
viewBox="0 0 24 24"
preserveAspectRatio="xMidYMid meet"
focusable="false"
class="style-scope yt-icon"
style="
  pointer-events: none;
  display: block;
  width: 36px;
  height: 26px;
"
>
<g class="style-scope yt-icon">
  <path
    d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
    class="style-scope yt-icon"
  ></path>
</g>
</svg>
`;
const svg5 = `            <svg
viewBox="0 0 24 24"
preserveAspectRatio="xMidYMid meet"
focusable="false"
class="style-scope yt-icon"
style="
  pointer-events: none;
  display: block;
  width: 36px;
  height: 26px;
"
>
<g class="style-scope yt-icon">
  <path
    d="M10,9.35,15,12l-5,2.65ZM12,6a54.36,54.36,0,0,0-7.56.38A1.53,1.53,0,0,0,3.38,7.44,24.63,24.63,0,0,0,3,12a24.63,24.63,0,0,0,.38,4.56,1.53,1.53,0,0,0,1.06,1.06A54.36,54.36,0,0,0,12,18a54.36,54.36,0,0,0,7.56-.38,1.53,1.53,0,0,0,1.06-1.06A24.63,24.63,0,0,0,21,12a24.63,24.63,0,0,0-.38-4.56,1.53,1.53,0,0,0-1.06-1.06A54.36,54.36,0,0,0,12,6h0m0-1s6.25,0,7.81.42a2.51,2.51,0,0,1,1.77,1.77A25.87,25.87,0,0,1,22,12a25.87,25.87,0,0,1-.42,4.81,2.51,2.51,0,0,1-1.77,1.77C18.25,19,12,19,12,19s-6.25,0-7.81-.42a2.51,2.51,0,0,1-1.77-1.77A25.87,25.87,0,0,1,2,12a25.87,25.87,0,0,1,.42-4.81A2.51,2.51,0,0,1,4.19,5.42C5.75,5,12,5,12,5Z"
    class="style-scope yt-icon"
  ></path>
</g>
</svg>`;
const svg6 = `            <svg
viewBox="0 0 24 24"
preserveAspectRatio="xMidYMid meet"
focusable="false"
class="style-scope yt-icon"
style="
  pointer-events: none;
  display: block;
  width: 36px;
  height: 26px;
"
>
<g class="style-scope yt-icon">
  <path
    d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
    class="style-scope yt-icon"
  ></path>
</g>
</svg>`;
const svg7 = `            <svg
viewBox="0 0 24 24"
preserveAspectRatio="xMidYMid meet"
focusable="false"
class="style-scope yt-icon"
style="
  pointer-events: none;
  display: block;
  width: 36px;
  height: 26px;
"
>
<g class="style-scope yt-icon">
  <path
    d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
    class="style-scope yt-icon"
  ></path>
</g>
</svg>`;
const svg8 = `            <svg
viewBox="0 0 24 24"
preserveAspectRatio="xMidYMid meet"
focusable="false"
class="style-scope yt-icon"
style="
  pointer-events: none;
  display: block;
  width: 36px;
  height: 26px;
"
>
<g class="style-scope yt-icon">
  <path
    d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"
    class="style-scope yt-icon"
  ></path>
</g>
</svg>`;

const svgs = [svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8];
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

createMenu(svg1, "홈", 0);
createMenu(svg2, "탐색", 1);
createMenu(svg3, "Shorts", 2);
createMenu(svg4, "구독", 3);
createMenu(svg5, "Originals", 4);
createMenu(svg6, "YouTube Music", 5);
createMenu(svg7, "보관함", 6);
createMenu(svg8, "오프라인 저장", 7);

hoveringMenu(0);
hoveringMenu(1);
hoveringMenu(2);
hoveringMenu(3);
hoveringMenu(4);
hoveringMenu(5);
hoveringMenu(6);
hoveringMenu(7);

createHeaderMenu(svg1, "홈", 0);
createHeaderMenu(svg2, "탐색", 1);
createHeaderMenu(svg3, "Shorts", 2);
createHeaderMenu(svg4, "구독", 3);
createHeaderMenu(svg5, "Originals", 4);
createHeaderMenu(svg6, "YouTube Music", 5);
createHeaderMenu(svg7, "보관함", 6);
createHeaderMenu(svg8, "오프라인 저장", 7);

// createHeaderMenu(svg1, "홈");
// createHeaderMenu(svg2, "탐색");
// createHeaderMenu(svg3, "Shorts");
// createHeaderMenu(svg4, "구독");
// createHeaderMenu(svg5, "Originals");
// createHeaderMenu(svg6, "YouTube Music");
// createHeaderMenu(svg7, "보관함");
// createHeaderMenu(svg8, "오프라인 저장");

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

images.forEach((img, index) => createVideo(img, index));
