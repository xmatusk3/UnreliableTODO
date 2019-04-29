import { ItemsState } from "../../../reducers/items/types";
import {
  deleteItem,
  completeItem,
  editItem,
  addItem
} from "../../../actions/items";
import { TodoItem } from "../TodoItem/types";

export interface TodoListComponentProps {
  readonly addSessionCallback: () => void;
}

export interface TodoListReduxProps {
  readonly items: ItemsState;
  readonly sessionExists: boolean;
}

export interface TodoListActions {
  readonly deleteItem: typeof deleteItem;
  readonly completeItem: typeof completeItem;
  readonly editItem: typeof editItem;
  readonly addItem: typeof addItem;
}

export interface TodoListState {
  readonly isAdding: boolean;
  readonly filter: (item: TodoItem) => boolean;
}

export interface TodoListProps
  extends TodoListComponentProps,
    TodoListReduxProps,
    TodoListActions {}
