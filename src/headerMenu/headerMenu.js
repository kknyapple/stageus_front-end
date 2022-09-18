const createHeaderMenu = function (svg, name, id) {
  const headerMenus = document.getElementById("header-menus");
  const headerMenuId = document.createElement("div");
  const headerMenu = document.createElement("div");
  const headerMenuButton = document.createElement("button");
  const headerMenuSvg = document.createElement("div");
  const headerMenuName = document.createElement("p");

  headerMenuId.setAttribute("id", `header-menu${id}`);
  headerMenu.setAttribute("id", "header-menu");
  headerMenuButton.setAttribute("id", "button-header-menu");

  headerMenuSvg.innerHTML = `${svg}`;
  headerMenuName.innerHTML = `${name}`;

  headerMenus.appendChild(headerMenuId);
  headerMenuId.appendChild(headerMenu);
  headerMenu.appendChild(headerMenuButton);
  headerMenuButton.appendChild(headerMenuSvg);
  headerMenuButton.appendChild(headerMenuName);
};

export default createHeaderMenu;
