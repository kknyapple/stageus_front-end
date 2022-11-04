import React from "react";
import CounterComponent from "./component/CounterComponent";
import ButtonsComponent from "./component/ButtonsComponent ";
import DifferenceComponent from "./component/DifferenceComponent";

const App = () => {
  //   const [number, setNumber] = React.useState(0);

  return (
    <React.Fragment>
      <CounterComponent />
      <ButtonsComponent />
      <DifferenceComponent />
    </React.Fragment>
  );
};

export default App;
