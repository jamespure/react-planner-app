import { combineReducers } from "redux";
import plansReducer from "./plansReducer";

export default combineReducers({
  plans: plansReducer,
});
