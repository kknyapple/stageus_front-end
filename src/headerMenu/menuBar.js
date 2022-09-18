const openMenuBar = function () {
  const menuBarButton = document.getElementById("button-menuBar");
  console.log("open");

  menuBarButton.addEventListener("click", (e) => {
    e.preventDefault;
    console.log("clicked");
    let menuBarList = document.getElementById("menu-bar-list");

    if (menuBarList.style.display == "") {
      menuBarList.style.display = "none";
      document.getElementById("header").style.backgroundColor = "white";
      document.getElementById("menus").style.display = "";
    } else if (menuBarList.style.display == "none") {
      menuBarList.style.display = "";
      document.getElementById("header").style.backgroundColor = "transparent";
      document.getElementById("menus").style.display = "none";
    }
  });
};

export default openMenuBar;
