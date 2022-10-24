import React from "react";

export default function WhiteBoxMenuItemComponent(props) {
  const name = props.name;
  const id = props.id;
  const img = props.img;

  return (
    <>
      {id.map((a, index) => {
        return (
          <div
            className="header-menu-class"
            key={index}
            id={`header-menu${id[index]}`}
          >
            <div id="header-menu">
              <div id="button-header-menu">
                <img src={`./images/${img[index]}.jpg`} />
                {name[index]}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
