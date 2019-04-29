import { ItemsState } from "./items/types";
import { ItemsActionTypes } from "../actions/items/types";
import { SessionState } from "./session/types";
import { SessionActionTypes } from "../actions/session/types";
import { MessageState } from "./message/types";
import { MessageActionTypes } from "../actions/message/types";

export interface TodoState {
  readonly items: ItemsState;
  readonly session: SessionState;
  readonly message: MessageState;
}

export type TodoActionTypes =
  | ItemsActionTypes
  | SessionActionTypes
  | MessageActionTypes;
