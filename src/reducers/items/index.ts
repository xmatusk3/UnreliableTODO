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
import { TodoItemPriorityEnum } from "../../components/TodoItem/types";

const INIT_STATE: ItemsState = {
  guid1: {
    created: new Date("2019-03-12T11:33:54.363Z"),
    id: "guid1",
    updated: new Date("2019-03-12T11:33:54.363Z"),
    isCompleted: false,
    priority: TodoItemPriorityEnum.Highest,
    text: "Idem kupit kilo chleba"
  },

  guid2: {
    created: new Date("2019-03-12T11:33:54.363Z"),
    id: "guid2",
    updated: new Date("2019-03-12T11:33:54.363Z"),
    isCompleted: false,
    priority: TodoItemPriorityEnum.Higher,
    text: "Pecivo chleba"
  },

  guid3: {
    created: new Date("2019-03-12T11:33:54.363Z"),
    id: "guid3",
    updated: new Date("2019-03-12T11:33:54.363Z"),
    isCompleted: false,
    priority: TodoItemPriorityEnum.Medium,
    text: "4 rohliky"
  },

  guid4: {
    created: new Date("2019-03-12T11:33:54.363Z"),
    id: "guid4",
    updated: new Date("2019-03-12T11:33:54.363Z"),
    isCompleted: false,
    priority: TodoItemPriorityEnum.Lower,
    text: "k tomu segendinsky gulas"
  },

  guid5: {
    created: new Date("2019-03-12T11:33:54.363Z"),
    id: "guid5",
    updated: new Date("2019-03-12T11:33:54.363Z"),
    isCompleted: false,
    priority: TodoItemPriorityEnum.Lowest,
    text: "4 knedliky"
  }
};

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
