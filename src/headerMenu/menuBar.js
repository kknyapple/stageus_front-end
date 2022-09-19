const openMenuBar = function () {
  const menuBarButton = document.getElementById("button-menuBar");
  const menuBarButton2 = document.getElementById("button-header-menu-bar");
  console.log("open");

  menuBarButton2.addEventListener("click", (e) => {
    const menuBarList = document.getElementById("menu-bar-list");
    document.getElementById("box-1").style.animationName = "brighter";
    document.getElementById("box-2").style.animationName = "close-bar";
    document.getElementById("header").style.backgroundColor = "white";

    setTimeout(() => {
      menuBarList.style.display = "none";
    }, 200);
  });

  menuBarButton.addEventListener("click", (e) => {
    e.preventDefault;
    console.log("clicked");
    const menuBarList = document.getElementById("menu-bar-list");
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("box-1").style.animationName = "darker";
    document.getElementById("box-2").style.animationName = "open-bar";

    menuBarList.style.display = "";
  });
};

export default openMenuBar;
