import { combineReducers } from "redux";
import loginReducer from "./login";
const allReducers = combineReducers({
  loginReducer,
  // Add more reducer here
});

export default allReducers;
