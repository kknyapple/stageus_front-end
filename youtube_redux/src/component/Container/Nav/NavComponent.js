import React from "react";
import NavItemComponent from "./NavItemComponent";

import { useDispatch } from "react-redux";
import {
  showMenu0,
  showMenu1,
  showMenu2,
  showMenu3,
  showMenu4,
  showMenu5,
  showMenu6,
  showMenu7,
} from "../../../action/action";

export default function NavComponent() {
  const menuInfoObj = {
    name: [
      "홈",
      "탐색",
      "Shorts",
      "구독",
      "Originals",
      "YouTube Music",
      "보관함",
      "오프라인 저장",
    ],
    id: ["0", "1", "2", "3", "4", "5", "6", "7"],
    img: [
      "menu0",
      "menu1",
      "menu2",
      "menu3",
      "menu4",
      "menu5",
      "menu6",
      "menu7",
    ],
  };

  const dispatch = useDispatch();

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

    document.getElementById("menu0").addEventListener("click", () => {
      dispatch(showMenu0());
    });

    document.getElementById("menu1").addEventListener("click", () => {
      dispatch(showMenu1());
    });

    document.getElementById("menu2").addEventListener("click", () => {
      dispatch(showMenu2());
    });

    document.getElementById("menu3").addEventListener("click", () => {
      dispatch(showMenu3());
    });

    document.getElementById("menu4").addEventListener("click", () => {
      dispatch(showMenu4());
    });

    document.getElementById("menu5").addEventListener("click", () => {
      dispatch(showMenu5());
    });

    document.getElementById("menu6").addEventListener("click", () => {
      dispatch(showMenu6());
    });

    document.getElementById("menu7").addEventListener("click", () => {
      dispatch(showMenu7());
    });
  }, []);

  return (
    <nav id="menus">
      {menuInfoObj.id.map((a, index) => {
        return <NavItemComponent key={index} {...menuInfoObj} index={index} />;
      })}
    </nav>
  );
}
