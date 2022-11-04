const initState = {
  menu: "home",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_MENU":
      return {
        menu: action.menu,
      };

    default:
      return state;
  }
};

export default reducer;
