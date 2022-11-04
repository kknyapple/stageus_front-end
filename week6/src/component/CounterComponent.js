import React from "react";
import { useSelector } from "react-redux";
import { useRecoilValue } from "recoil";

import { numberState, isEvenState } from "../recoil/counterState";

const CounterComponent = () => {
  //   const { number } = props;

  // state가져올때는 action에 명세하지 않아도 누구나 가져올 수 있음
  //useSelector를 통해 reducer한테 state를 요청할 수 있음
  //const number = useSelector((state) => state.number); //redux 방법

  const number = useRecoilValue(numberState); //recoil 방법
  const isEven = useRecoilValue(isEvenState);
  return (
    <div>
      {number}({isEven ? "짝수" : "홀수"})
    </div>
  );
};

export default CounterComponent;
