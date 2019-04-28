import { TodoItemPriorityEnum } from "../../components/Todos/TodoItem/types";
import { TodoItem } from "../../components/Todos/TodoItem/types";

export const ADD_ITEM = "ADD_ITEM";
export const COMPLETE_ITEM = "COMPLETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export interface AddItemAction {
  readonly type: typeof ADD_ITEM;
  readonly payload: TodoItem;
}

export interface CompleteItemAction {
  readonly type: typeof COMPLETE_ITEM;
  readonly payload: {
    readonly id: string;
  };
}

export interface EditItemAction {
  readonly type: typeof EDIT_ITEM;
  readonly payload: {
    readonly id: string;
    readonly text: string;
    readonly priority: TodoItemPriorityEnum;
  };
}

export interface DeleteItemAction {
  readonly type: typeof DELETE_ITEM;
  readonly payload: {
    readonly id: string;
  };
}

export type ItemsActionTypes =
  | AddItemAction
  | EditItemAction
  | CompleteItemAction
  | DeleteItemAction;
