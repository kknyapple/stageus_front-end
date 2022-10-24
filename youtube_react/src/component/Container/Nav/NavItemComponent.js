import React from "react";

export default function NavItemComponent(props) {
  const { name, id, img } = props;
  //const name = props.name;
  //const id = props.id;
  //const img = props.img;

  //낭비되는 div 태그 줄이기
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
