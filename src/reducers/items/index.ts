import _ from "lodash";
import { Reducer } from "redux";

import { ItemsState } from "./types";
import {
  EDIT_ITEM,
  DELETE_ITEM,
  ADD_ITEM,
  AddItemAction,
  ItemsActionTypes
} from "../../actions/items/types";
import { EDIT_SESSION } from "../../actions/session/types";
import { TodoActionTypes } from "../types";

const INIT_STATE: ItemsState = {};

const itemsReducer: Reducer<ItemsState, TodoActionTypes> = (
  state = INIT_STATE,
  { type, payload }
) => {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        [(payload as ItemsActionTypes["payload"]).id]: {
          ...(payload as AddItemAction["payload"])
        }
      };
    case EDIT_ITEM:
      return {
        ...state,
        [(payload as ItemsActionTypes["payload"]).id]: {
          ...state[(payload as ItemsActionTypes["payload"]).id],
          ...payload
        }
      };
    case DELETE_ITEM:
      return _.omit(state, (payload as ItemsActionTypes["payload"]).id);
    case EDIT_SESSION:
      return { ...INIT_STATE };
    default:
      return state;
  }
};

export default itemsReducer;
