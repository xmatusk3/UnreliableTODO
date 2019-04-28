import { combineReducers, Reducer } from "redux";

import itemsReducer from "./items";
import { TodoState, TodoActionTypes } from "./types";

const rootReducer: Reducer<TodoState, TodoActionTypes> = combineReducers({
  items: itemsReducer
});

export default rootReducer;
