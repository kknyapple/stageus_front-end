const initState = {
  button: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SLIDE_MENU_OPENED":
      return {
        button: true, //!state.button,
      };
    case "SLIDE_MENU_CLOSED":
      return {
        button: false,
      };
    default:
      return state;
  }
};

export default reducer;
