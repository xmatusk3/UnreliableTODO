import { TodoItemPriorityEnum } from "../components/TodoItem/types";

export const getPriorityDDLValues: () => { [key: string]: string } = () => {
  const result: { [key: string]: string } = {};

  for (let key in TodoItemPriorityEnum) {
    if (isNaN(parseInt(key))) {
      result[TodoItemPriorityEnum[key]] = key;
    }
  }

  return result;
};
