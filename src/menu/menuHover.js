const hoveringMenu = function (id) {
  const menu = document.getElementById(`menu${id}`);
  menu.addEventListener("mouseover", () => {
    document.getElementById(`menu${id}`).style.backgroundColor = "lightgray";
  });
  menu.addEventListener("mouseleave", () => {
    document.getElementById(`menu${id}`).style.backgroundColor = "transparent";
  });
};

export default hoveringMenu;
