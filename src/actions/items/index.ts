import {
  CompleteItemAction,
  COMPLETE_ITEM,
  EditItemAction,
  EDIT_ITEM,
  DeleteItemAction,
  DELETE_ITEM,
  ADD_ITEM
} from "./types";
import {
  TodoItemPriorityEnum,
  TodoItem
} from "../../components/Todos/TodoItem/types";

export const addItem = (item: TodoItem) => ({
  type: ADD_ITEM,
  payload: item
});

export const completeItem = (id: string) =>
  ({
    type: COMPLETE_ITEM,
    payload: {
      id
    }
  } as CompleteItemAction);

export const editItem = (
  id: string,
  text: string,
  priority: TodoItemPriorityEnum
) =>
  ({
    type: EDIT_ITEM,
    payload: {
      id,
      text,
      priority
    }
  } as EditItemAction);

export const deleteItem = (id: string) =>
  ({
    type: DELETE_ITEM,
    payload: {
      id
    }
  } as DeleteItemAction);
