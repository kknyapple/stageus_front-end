import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useRecoilState } from "recoil";

import { setNumber } from "../redux/action/action";
import { differenceState } from "../recoil/counterState";

const DifferenceComponent = () => {
  //   const difference = useSelector((state) => state.difference); //redux
  //   const dispatch = useDispatch(); //redux

  const [difference, setDifference] = useRecoilState(differenceState); //recoil
  return (
    <input
      type="text"
      value={difference}
      onChange={(e) => {
        //dispatch(setNumber(parseInt(e.target.value))); //redux
        setDifference(parseInt(e.target.value)); //recoil
      }}
    />
  );
};

export default DifferenceComponent;
