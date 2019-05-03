import _ from "lodash";
import { Reducer } from "redux";

import { ItemsState } from "./types";
import {
  EDIT_ITEM,
  DELETE_ITEM,
  ADD_ITEM,
  AddItemAction,
  EditItemAction,
  DeleteItemAction,
  SAVE_ITEMS,
  SaveAllItemsAction
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
        [(payload as AddItemAction["payload"]).id]: {
          ...(payload as AddItemAction["payload"])
        }
      };
    case EDIT_ITEM:
      return {
        ...state,
        [(payload as EditItemAction["payload"]).id]: {
          ...state[(payload as EditItemAction["payload"]).id],
          ...(payload as EditItemAction["payload"])
        }
      };
    case DELETE_ITEM:
      return _.omit(state, (payload as DeleteItemAction["payload"]).id);
    case SAVE_ITEMS:
      return { ...(payload as SaveAllItemsAction["payload"]) };
    case EDIT_SESSION:
      return payload ? state : { ...INIT_STATE };
    default:
      return state;
  }
};

export default itemsReducer;
