import React from "react";
import { useSelector } from "react-redux";

const CounterComponent = () => {
  //   const { number } = props;

  // state가져올때는 action에 명세하지 않아도 누구나 가져올 수 있음
  //useSelector를 통해 reducer한테 state를 요청할 수 있음
  const number = useSelector((state) => state.number);

  return <div>{number}</div>;
};

export default CounterComponent;
