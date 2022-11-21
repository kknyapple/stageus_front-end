//최고 부모 컴포넌트
import React from "react";

import HeaderComponent from "./component/Header/HeaderComponent";
import SlideNavPageComponent from "./component/SlideMenu/SlideMenuPageComponent";
import ContainerComponent from "./component/Container/ContainerComponent";
import GlobalStyle from "./style/globalStyle";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SlideNavPageComponent />
      <HeaderComponent />
      <ContainerComponent />
    </React.Fragment>
  );
};

export default App;
