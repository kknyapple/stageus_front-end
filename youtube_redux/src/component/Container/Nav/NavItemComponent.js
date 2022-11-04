import React from "react";

export default function NavItemComponent(props) {
  const { menu } = props;

  return (
    <div id={`menu${menu.id}`}>
      <div id="menu">
        <div id="button-menu">
          <img src={`./images/${menu.img}.jpg`} />
          {menu.name}
        </div>
      </div>
    </div>
  );
}
