import { TodoItemPriorityEnum } from "../../components/TodoItem/types";

export const COMPLETE_ITEM = "COMPLETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

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
  | EditItemAction
  | CompleteItemAction
  | DeleteItemAction;
