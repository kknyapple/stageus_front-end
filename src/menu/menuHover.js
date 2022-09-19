const hoveringMenu = function (id) {
  const menu = document.getElementById(`menu${id}`);
  menu.addEventListener("mouseover", () => {
    menu.style.backgroundColor = "lightgray";
  });
  menu.addEventListener("mouseleave", () => {
    menu.style.backgroundColor = "transparent";
  });
};

export default hoveringMenu;
