import { TodoItem } from "../../../actions/items/types";

export interface TodoItemProps {
  readonly item: TodoItem;
  readonly editCallback: Function;
  readonly completeCallback: Function;
  readonly cancelCallback: Function;
  readonly editTitle: string;
  readonly completeTitle: string;
  readonly deleteTitle: string;
}
