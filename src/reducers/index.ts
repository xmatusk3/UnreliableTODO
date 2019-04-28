import { combineReducers, Reducer } from "redux";

import itemsReducer from "./items";
import sessionReducer from "./session";
import { TodoState, TodoActionTypes } from "./types";

const rootReducer: Reducer<TodoState, TodoActionTypes> = combineReducers({
  items: itemsReducer,
  session: sessionReducer
});

export default rootReducer;
