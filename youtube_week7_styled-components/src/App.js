//최고 부모 컴포넌트
import React from "react";

import HeaderComponent from "./component/Header/HeaderComponent";
import SlideNavPageComponent from "./component/SlideMenu/SlideMenuPageComponent";
import ContainerComponent from "./component/Container/ContainerComponent";

const App = () => {
  return (
    <React.Fragment>
      <SlideNavPageComponent />
      <HeaderComponent />
      <ContainerComponent />
    </React.Fragment>
  );
};

export default App;
