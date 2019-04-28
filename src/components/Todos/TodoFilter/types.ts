import { TodoListState } from "../TodoList/types";

export interface TodoFilterProps {
  readonly onApply: (filter: TodoListState["filter"]) => void;
}
