import { ItemsState } from "./items/types";
import { ItemsActionTypes } from "../actions/items/types";

export interface TodoState {
  readonly items: ItemsState;
}

export type TodoActionTypes = ItemsActionTypes;
