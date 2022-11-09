import React from "react";
import styled from "styled-components";

import { ButtonTag, DivTag } from "../../../style/tag";

const Nav = styled(DivTag)`
  flex-direction: column;
  height: 74.625px;
`;

const NavButton = styled(ButtonTag)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 100px;
  background-color: transparent;
`;

const NavButtonName = styled.span`
  font-size: 2px;
`;

const NavButtonImg = styled.img`
  width: 30px;
  height: auto;
`;

export default function NavItemComponent(props) {
  const { menu } = props;

  const navOnMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "lightgray";
  };

  const navOnMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
  };

  return (
    <Nav
      id={`menu${menu.id}`}
      onMouseOver={navOnMouseOver}
      onMouseOut={navOnMouseOut}
    >
      <NavButton>
        <NavButtonImg src={`./images/${menu.img}.jpg`} />
        <NavButtonName>{menu.name}</NavButtonName>
      </NavButton>
    </Nav>
  );
}
