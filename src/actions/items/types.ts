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

export interface TodoItem {
  readonly id: string;
  readonly text: string;
  readonly isCompleted: boolean;
  readonly urgency: TodoItemPriorityEnum;
  readonly created: Date;
  readonly updated: Date;
}

export enum TodoItemPriorityEnum {
  Lowest = 1,
  Lower = 2,
  Medium = 3,
  Higher = 4,
  Highest = 5
}

export interface ItemResponse extends APIResponse {
  todo: TodoItem;
}

export type ItemsActionTypes =
  | AddItemAction
  | EditItemAction
  | DeleteItemAction;
