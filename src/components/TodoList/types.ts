import { ItemsState } from "../../reducers/items/types";
import {
  deleteItem,
  completeItem,
  editItem,
  addItem
} from "../../actions/items";

export interface TodoListReduxProps {
  readonly items: ItemsState;
  readonly deleteItem: typeof deleteItem;
  readonly completeItem: typeof completeItem;
  readonly editItem: typeof editItem;
  readonly addItem: typeof addItem;
}

export interface TodoListState {
  readonly isAdding: boolean;
}
