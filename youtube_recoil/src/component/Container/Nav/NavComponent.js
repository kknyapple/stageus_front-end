import React from "react";
import { useRecoilState } from "recoil";
import { navState } from "../../../atom";

import NavItemComponent from "./NavItemComponent";

export default function NavComponent() {
  const menusData = [
    {
      id: "0",
      img: "menu0",
      name: "home",
    },
    {
      id: "1",
      img: "menu1",
      name: "search",
    },
    {
      id: "2",
      img: "menu2",
      name: "shorts",
    },
    {
      id: "3",
      img: "menu3",
      name: "describe",
    },
    {
      id: "4",
      img: "menu4",
      name: "originals",
    },
    {
      id: "5",
      img: "menu5",
      name: "music",
    },
    {
      id: "6",
      img: "menu6",
      name: "storage",
    },
    {
      id: "7",
      img: "menu7",
      name: "offline",
    },
  ];
  const [menu, setMenu] = useRecoilState(navState);

  const navOnMouseOver = (e) => {
    const eventTarget = e.target;

    if (eventTarget.id || eventTarget.parentNode.id == "button-menu") {
      eventTarget.parentNode.style.backgroundColor = "lightgray";
    }
  };

  const navOnMouseOut = (e) => {
    const eventTarget = e.target;

    if (eventTarget.id || eventTarget.parentNode.id == "button-menu") {
      eventTarget.parentNode.style.backgroundColor = "transparent";
    }
  };

  React.useEffect(() => {
    document
      .getElementById("menus")
      .addEventListener("mouseover", navOnMouseOver);

    document
      .getElementById("menus")
      .addEventListener("mouseout", navOnMouseOut);

    menusData.forEach((menu, index) => {
      document.getElementById(`menu${index}`).addEventListener("click", () => {
        setMenu(menu.name);
      });
    });
  }, [menu]);

  return (
    <nav id="menus">
      {menusData.map((menu) => {
        return <NavItemComponent key={menu.id} menu={menu} />;
      })}
    </nav>
  );
}
