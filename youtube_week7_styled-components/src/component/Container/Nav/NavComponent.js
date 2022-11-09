import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import NavItemComponent from "./NavItemComponent";
import { navState } from "../../../recoil/common.js";
import { NavTag } from "../../../style/tag.js";

const NavBox = styled(NavTag)`
  justify-content: space-between;
  height: 597px;
  text-align: center;
  position: sticky;
  top: 60px;
  width: 78px;

  @media screen and (max-width: 792px) {
    display: none;
  }
`;

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

  React.useEffect(() => {
    menusData.forEach((menu, index) => {
      document.getElementById(`menu${index}`).addEventListener("click", () => {
        setMenu(menu.name);
      });
    });
  }, [menu]);

  return (
    <NavBox>
      {menusData.map((menu) => {
        return <NavItemComponent key={menu.id} menu={menu} />;
      })}
    </NavBox>
  );
}
