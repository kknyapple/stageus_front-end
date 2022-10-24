const initState = {
  page: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "MENU_0":
      return {
        page: 0,
      };
    case "MENU_1":
      return {
        page: 1,
      };
    case "MENU_2":
      return {
        page: 2,
      };
    case "MENU_3":
      return {
        page: 3,
      };
    case "MENU_4":
      return {
        page: 4,
      };
    case "MENU_5":
      return {
        page: 5,
      };
    case "MENU_6":
      return {
        page: 6,
      };
    case "MENU_7":
      return {
        page: 7,
      };
    default:
      return state;
  }
};

export default reducer;
