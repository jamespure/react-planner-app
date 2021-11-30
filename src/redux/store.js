import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const composeEnhancers = composeWithDevTools({});
const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
