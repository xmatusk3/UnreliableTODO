import { TodoItem } from "../../../actions/items/types";

export interface TodoItemEditProps {
  readonly item: TodoItem;
  readonly applyCallback: Function;
  readonly cancelCallback: Function;
  readonly applyTitle: string;
  readonly cancelTitle: string;
  readonly editModeOnly?: boolean;
}
