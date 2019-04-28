import { TodoItem } from "../../components/Todos/TodoItem/types";

export interface ItemsState {
  readonly [id: string]: TodoItem;
}
