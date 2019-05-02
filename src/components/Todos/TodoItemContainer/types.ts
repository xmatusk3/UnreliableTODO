import { TodoItem } from "../../../actions/items/types";

export interface TodoItemContainerProps {
  readonly item: TodoItem;
  readonly editModeOnly?: boolean;
  readonly editCallback: Function;
  readonly completeCallback: Function;
  readonly deleteCallback: Function;
}
