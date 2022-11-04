import { videosData } from "../data/videoData";

const initState = {
  data: videosData,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_VIDEO":
      return {
        data: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
