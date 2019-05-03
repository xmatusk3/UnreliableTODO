import { APIResponse } from "..";
import { ItemsState } from "../../reducers/items/types";

export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SAVE_ITEMS = "SAVE_ITEMS";

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

export interface SaveAllItemsAction {
  readonly type: typeof SAVE_ITEMS;
  readonly payload: ItemsState;
}

export interface TodoItem {
  readonly id: string;
  readonly text: string;
  readonly isCompleted: boolean;
  readonly urgency: TodoItemPriorityEnum;
  readonly created: string;
  readonly updated: string;
}

export enum TodoItemPriorityEnum {
  Lowest = 1,
  Lower = 2,
  Medium = 3,
  Higher = 4,
  Highest = 5
}

export interface ItemResponse extends APIResponse {
  readonly todo: TodoItem;
}

export interface AllItemsResponse extends APIResponse {
  readonly todos: ItemsState;
}

export type ItemsActionTypes =
  | AddItemAction
  | EditItemAction
  | DeleteItemAction
  | SaveAllItemsAction;
