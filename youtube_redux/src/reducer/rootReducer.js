import { combineReducers } from "redux";

import slideMenuReducer from "./slideMenuReducer";
import navReducer from "./navReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  slideMenuReducer,
  navReducer,
  dataReducer,
});

export default rootReducer;
