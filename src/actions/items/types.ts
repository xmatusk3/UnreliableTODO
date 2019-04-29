import { TodoItem } from "../../components/Todos/TodoItem/types";
import { APIResponse } from "..";

export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export interface AddItemAction {
  readonly type: typeof ADD_ITEM;
  readonly payload: TodoItem;
}

export interface EditItemAction {
  readonly type: typeof EDIT_ITEM;
  readonly payload: TodoItem;
}

export interface DeleteItemAction {
  readonly type: typeof DELETE_ITEM;
  readonly payload: {
    readonly id: string;
  };
}

export interface ItemResponse extends APIResponse {
  todo: TodoItem;
}

export type ItemsActionTypes =
  | AddItemAction
  | EditItemAction
  | DeleteItemAction;
