import { TodoItem } from "../../actions/items/types";

export interface ItemsState {
  readonly [id: string]: TodoItem;
}
