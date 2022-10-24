import React from "react";
import WhiteBoxTitleComponent from "./WhiteBoxTitleComponent";
import WhiteBoxMenuComponent from "./WhiteBoxMenuComponent";

export default function WhiteBoxComponent(props) {
  const menuInfoObj = props.menuInfoObj;

  const nav = props.nav;

  React.useEffect(() => {
    document
      .getElementById("header-menu-bar")
      .addEventListener("click", props.navClickHandler);
  }, []);

  return (
    <div id="box-2">
      <WhiteBoxTitleComponent />
      <WhiteBoxMenuComponent
        menuInfoObj={menuInfoObj}
        // id={id} name={name} img={img}
      />
    </div>
  );
}
