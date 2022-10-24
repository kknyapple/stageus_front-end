import React from "react";

export default function NavItemComponent(props) {
  const { name, id, img } = props;

  return (
    <div id={`menu${id[props.index]}`}>
      <div id="menu">
        <div id="button-menu">
          <img src={`./images/${img[props.index]}.jpg`} />
          {name[props.index]}
        </div>
      </div>
    </div>
  );
}
