import { combineReducers } from "redux";

import { counter } from "./slices";

const reducers = combineReducers({
  counter,
});

export default reducers;
