import {
  CompleteItemAction,
  COMPLETE_ITEM,
  EditItemAction,
  EDIT_ITEM,
  DeleteItemAction,
  DELETE_ITEM
} from "./types";
import { TodoItemPriorityEnum } from "../../components/TodoItem/types";

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
