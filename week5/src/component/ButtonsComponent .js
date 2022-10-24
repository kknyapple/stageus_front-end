import React from "react";
import { useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "../action/action";

const ButtonsComponent = () => {
  //   const { number, setNumber } = props;

  //useDispatch를 통해 reducer한테 state 수정을 요청할 수 있음
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="button"
        value="증가"
        onClick={() => {
          dispatch(incrementNumber());
        }}
      />
      <input
        type="button"
        value="감소"
        onClick={() => {
          dispatch(decrementNumber());
        }}
      />
    </div>
  );
};

export default ButtonsComponent;
