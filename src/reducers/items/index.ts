import _ from "lodash";
import { Reducer } from "redux";

import { ItemsState } from "./types";
import {
  ItemsActionTypes,
  COMPLETE_ITEM,
  EDIT_ITEM,
  EditItemAction,
  DELETE_ITEM,
  ADD_ITEM,
  AddItemAction
} from "../../actions/items/types";

const INIT_STATE: ItemsState = {};

const itemsReducer: Reducer<ItemsState, ItemsActionTypes> = (
  state = INIT_STATE,
  { type, payload }
) => {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        [payload.id]: { ...(payload as AddItemAction["payload"]) }
      };
    case COMPLETE_ITEM:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          isCompleted: true
        }
      };
    case EDIT_ITEM:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          text: (payload as EditItemAction["payload"]).text,
          priority: (payload as EditItemAction["payload"]).priority
        }
      };
    case DELETE_ITEM:
      return _.omit(state, payload.id);
    default:
      return state;
  }
};

export default itemsReducer;
