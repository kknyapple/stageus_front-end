import React from "react";
import { useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "../redux/action/action";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { differenceState, numberState } from "../recoil/counterState";

//Style

const Input = styled.input`
  width: 50px;
  height: 25px;
  background-color: white;
  border-radius: 5px;

  ${(props) => {
    const color = props.color || "green";
    return `border: 1px solid ${color};
            color:${color};
    `;
  }}

  //& -> 자기 자신을 의미

  //두개 사이 벌리기 //첫번 째거 적용 x, 두번 째거 부터 적용됨
  & + & {
    margin-left: 20px;
  }

  ${(props) => props.bold && `font-weight:1000;`}
`;

//Code

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
      <Input
        type="button"
        value="증가"
        color="red"
        bold
        onClick={() => {
          // dispatch(incrementNumber()); //redux
          setNumber(number + difference); //recoil
        }}
      />
      <Input
        type="button"
        value="감소"
        color="blue"
        onClick={() => {
          //dispatch(decrementNumber()); //redux
          setNumber(number - difference); //recoil
        }}
      />
    </div>
  );
};

export default ButtonsComponent;
