import { ItemsState } from "../../../reducers/items/types";
import { TodoItem } from "../../../actions/items/types";
import { Session } from "../../../actions/session/types";

export interface TodoListComponentProps {
  readonly onEditCallback: () => void;
}

export interface TodoListReduxProps {
  readonly items: ItemsState;
  readonly sessionExists: boolean;
}

export interface TodoListActions {
  readonly deleteItem: (itemId: string, successCallback?: () => void) => void;
  readonly editItem: (item: TodoItem, successCallback?: () => void) => void;
  readonly addItem: (item: TodoItem, successCallback?: () => void) => void;
  readonly editSession: (
    session?: Session,
    successCallback?: () => void
  ) => void;
}

export interface TodoListState {
  readonly isAdding: boolean;
  readonly filter: (item: TodoItem) => boolean;
}

export interface TodoListProps
  extends TodoListComponentProps,
    TodoListReduxProps,
    TodoListActions {}
