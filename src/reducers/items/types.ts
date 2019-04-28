import { TodoItem } from "../../components/TodoItem/types";

export interface ItemsState {
  readonly [id: string]: TodoItem;
}
