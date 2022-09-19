const hoveringHeaderMenu = function (id) {
  const headerMenu = document.getElementById(`header-menu${id}`);
  headerMenu?.addEventListener("mouseover", () => {
    document.getElementById(`header-menu${id}`).style.backgroundColor =
      "lightgray";
  });
  headerMenu?.addEventListener("mouseleave", () => {
    document.getElementById(`header-menu${id}`).style.backgroundColor =
      "transparent";
  });
};

export default hoveringHeaderMenu;
