import { combineReducers } from "redux";

import slideMenuReducer from "./slideMenuReducer";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  slideMenuReducer,
  navReducer,
});

export default rootReducer;
