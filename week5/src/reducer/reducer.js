const initState = {
  number: 0,
  difference: 1,
};

// Reducer 파일이, store에 해줄 작업을 처리하는 파일
// -> 처리 로직을 코딩하는 파일

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREAMENT_NUMBER":
      return {
        //return을 해주면 difference: 1이 없어짐
        ...state,
        number: state.number + state.difference,
      };
    case "DECREAMENT_NUMBER":
      return {
        ...state,
        number: state.number - state.difference,
      };
    case "SET_NUMBER":
      return {
        ...state,
        difference: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
