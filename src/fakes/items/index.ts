import { TodoItem, TodoItemPriorityEnum } from "../../actions/items/types";
import { ItemsState } from "../../reducers/items/types";

export const idA = "fakeIdA";
export const idB = "fakeIdB";

export const itemA: TodoItem = {
  created: new Date().toLocaleString(),
  isCompleted: false,
  text: "itemA",
  updated: new Date().toLocaleString(),
  urgency: TodoItemPriorityEnum.Medium,
  id: idA
};

export const itemB: TodoItem = {
  created: new Date().toLocaleString(),
  isCompleted: false,
  text: "itemB",
  updated: new Date().toLocaleString(),
  urgency: TodoItemPriorityEnum.Medium,
  id: idB
};

export const getFakeItemsState = (): ItemsState => {
  return {
    [idA]: itemA
  };
};
