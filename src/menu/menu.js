const createMenu = function (svg, name) {
  const menus = document.getElementById("menus");
  const menu = document.createElement("div");
  const menuButton = document.createElement("button");
  const menuSvg = document.createElement("div");
  const menuName = document.createElement("p");

  menu.setAttribute("id", "menu");
  menuButton.setAttribute("id", "button-menu");

  menuSvg.innerHTML = `${svg}`;
  menuName.innerHTML = `${name}`;

  menus.appendChild(menu);
  menu.appendChild(menuButton);
  menuButton.appendChild(menuSvg);
  menuButton.appendChild(menuName);
};

export default createMenu;
