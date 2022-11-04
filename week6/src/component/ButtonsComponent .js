import React from "react";
import { useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "../redux/action/action";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

import { differenceState, numberState } from "../recoil/counterState";

const ButtonsComponent = () => {
  //   const { number, setNumber } = props;

  //useDispatch를 통해 reducer한테 state 수정을 요청할 수 있음
  //const dispatch = useDispatch();  //redux 방법

  const [number, setNumber] = useRecoilState(numberState); //recoil 방법
  //const number=useRecoilValue(numberState) //이런 식으로 나눌 수 있음
  //const setNumber=useSetRecoilState(numberState) //useSetRecoilState은 함수만 가져오기
  const difference = useRecoilValue(differenceState);

  return (
    <div>
      <input
        type="button"
        value="증가"
        onClick={() => {
          // dispatch(incrementNumber()); //redux
          setNumber(number + difference); //recoil
        }}
      />
      <input
        type="button"
        value="감소"
        onClick={() => {
          //dispatch(decrementNumber()); //redux
          setNumber(number - difference); //recoil
        }}
      />
    </div>
  );
};

export default ButtonsComponent;
