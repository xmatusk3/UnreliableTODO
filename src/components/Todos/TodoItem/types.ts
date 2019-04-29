export interface TodoItemProps {
  readonly item: TodoItem;
  readonly editModeOnly?: boolean;
  readonly editCallback: Function;
  readonly completeCallback: Function;
  readonly deleteCallback: Function;
}

export enum TodoItemPriorityEnum {
  Lowest = 1,
  Lower = 2,
  Medium = 3,
  Higher = 4,
  Highest = 5
}

export interface TodoItem {
  readonly id: string;
  readonly text: string;
  readonly isCompleted: boolean;
  readonly urgency: TodoItemPriorityEnum;
  readonly created: Date;
  readonly updated: Date;
}
