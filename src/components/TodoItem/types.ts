export interface TodoItemProps {
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
