import _ from "lodash";
import { Reducer } from "redux";

import { ItemsState } from "./types";
import {
  ItemsActionTypes,
  COMPLETE_ITEM,
  EDIT_ITEM,
  EditItemAction,
  DELETE_ITEM
} from "../../actions/items/types";

const INIT_STATE: ItemsState = {};

const itemsReducer: Reducer<ItemsState, ItemsActionTypes> = (
  state = INIT_STATE,
  { type, payload }
) => {
  switch (type) {
    case COMPLETE_ITEM:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id]
        }
      };
    case EDIT_ITEM:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          ...(payload as EditItemAction["payload"]).item
        }
      };
    case DELETE_ITEM:
      return _.omit(state, payload.id);
    default:
      return state;
  }
};

export default itemsReducer;
