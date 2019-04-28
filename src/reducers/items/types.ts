import { TodoItem } from "../../components/TodoItem/types";

export interface ItemsState {
  [id: string]: TodoItem;
}
