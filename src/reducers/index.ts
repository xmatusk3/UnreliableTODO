import { combineReducers, Reducer } from "redux";

const rootReducer: Reducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
