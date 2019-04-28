import { ItemsState } from "../../reducers/items/types";
import { deleteItem, completeItem, editItem } from "../../actions/items";

export interface TodoListReduxProps {
  readonly items: ItemsState;
  readonly deleteItem: typeof deleteItem,
  readonly completeItem: typeof completeItem,
  readonly editItem: typeof editItem,
}
