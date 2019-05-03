import { ItemsState } from "../../../reducers/items/types";
import { TodoItem } from "../../../actions/items/types";
import { Session } from "../../../actions/session/types";
import { selectSessionActionCreator } from "../../../actions";

export interface TodoListComponentProps {
  readonly onEditCallback: () => void;
  readonly onAddingCallback: () => void;
  readonly onDeleteLastSessionCallback: () => void;
}

export interface TodoListReduxProps {
  readonly items: ItemsState;
  readonly sessionId?: string;
  readonly sessionIdDisplayNameMap: { [id: string]: string };
}

export interface TodoListActions {
  readonly deleteItem: (itemId: string, successCallback?: () => void) => void;
  readonly editItem: (item: TodoItem, successCallback?: () => void) => void;
  readonly addItem: (item: TodoItem, successCallback?: () => void) => void;
  readonly editSession: (
    session?: Session,
    successCallback?: () => void
  ) => void;
  readonly getAllTodos: (id: string, callback: () => void) => void;
  readonly selectSession: typeof selectSessionActionCreator;
}

export interface TodoListState {
  readonly isAdding: boolean;
  readonly filter: (item: TodoItem) => boolean;
}

export interface TodoListProps
  extends TodoListComponentProps,
    TodoListReduxProps,
    TodoListActions {}
