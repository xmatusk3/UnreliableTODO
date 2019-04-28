import { ItemsState } from "./items/types";
import { ItemsActionTypes } from "../actions/items/types";
import { SessionState } from "./session/types";
import { SessionActionTypes } from "../actions/session/types";

export interface TodoState {
  readonly items: ItemsState;
  readonly session: SessionState;
}

export type TodoActionTypes = ItemsActionTypes | SessionActionTypes;
