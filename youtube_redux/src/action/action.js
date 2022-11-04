const openSlideMenu = () => {
  return { type: "SLIDE_MENU_OPENED" };
};

const closeSlideMenu = () => {
  return { type: "SLIDE_MENU_CLOSED" };
};

const showMenu = (menu) => {
  return { type: "CHANGE_MENU", menu };
};

const showVideo = (data) => {
  return { type: "GET_VIDEO", data };
};

export { openSlideMenu, closeSlideMenu, showMenu, showVideo };
