import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNumber } from "../action/action";

const DifferenceComponent = () => {
  const difference = useSelector((state) => state.difference);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      value={difference}
      onChange={(e) => {
        dispatch(setNumber(parseInt(e.target.value)));
      }}
    />
  );
};

export default DifferenceComponent;
