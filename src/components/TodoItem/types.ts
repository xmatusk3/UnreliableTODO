export interface TodoItemProps {
  readonly id: string;
  readonly text: string;
  readonly priority: TodoItemPriorityEnum;
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
  readonly priority: TodoItemPriorityEnum;
  readonly created: Date;
  readonly updated: Date;
}
