const createMenu = function (svg, name, id) {
  const menus = document.getElementById("menus");
  const menuId = document.createElement("div");
  const menu = document.createElement("div");
  const menuButton = document.createElement("button");
  const menuSvg = document.createElement("div");
  // const menuName = document.createElement("p");

  menuId.setAttribute("id", `menu${id}`);
  menu.setAttribute("id", "menu");
  menuButton.setAttribute("id", "button-menu");

  menuSvg.innerHTML = `${svg}`;
  menuButton.innerHTML = `${name}`;
  // menuName.innerHTML = `${name}`;

  menus.appendChild(menuId);
  menuId.appendChild(menu);
  menu.appendChild(menuButton);
  menuButton.prepend(menuSvg);
  // menuButton.appendChild(menuName);

  hoveringMenu(id);
};
