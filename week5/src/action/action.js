// 컴포넌트가 Reducer한테 요청할 수 있는 명령어 목록

// 요청하는 명령어의 이름
// 그 명령을 실행할 때 필요한 값
// -> 실질적으로 어떻게 동작할지는 여기에 지정하지 않음
// -> 준비 재료만 지정해 줌

const incrementNumber = () => {
  return { type: "INCREAMENT_NUMBER" };
};

const decrementNumber = () => {
  return { type: "DECREAMENT_NUMBER" };
};

const setNumber = (data) => {
  return {
    type: "SET_NUMBER",
    value: data,
  };
};

export { incrementNumber, decrementNumber, setNumber };
