//최고 부모 컴포넌트
import React from "react";
import HeaderComponent from "./component/Header/HeaderComponent";
import SideNavComponent from "./component/SideNav/SideNavComponent";
import ContainerComponent from "./component/Container/ContainerComponent";

const App = () => {
  const [nav, setNav] = React.useState(false);

  const navClickHandler = () => {
    console.log("click");
    setNav(!nav);
  };

  return (
    <React.Fragment>
      <SideNavComponent nav={nav} navClickHandler={navClickHandler} />
      <HeaderComponent nav={nav} navClickHandler={navClickHandler} />
      <ContainerComponent />
    </React.Fragment>
  );
};

export default App;
