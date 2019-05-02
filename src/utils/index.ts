import { Dispatch } from "redux";

import { editMessage } from "../actions";
import { MessageTypeEnum } from "../actions/message/types";
import { TodoItemPriorityEnum } from "../actions/items/types";

export const getPriorityDDLValues: () => { [key: string]: string } = () => {
  const result: { [key: string]: string } = {};

  for (let key in TodoItemPriorityEnum) {
    if (isNaN(parseInt(key))) {
      result[TodoItemPriorityEnum[key]] = key;
    }
  }

  return result;
};

export const setErrorMessage = (dispatch: Dispatch, text: string): void => {
  dispatch(editMessage({ type: MessageTypeEnum.Error, text }));
};

export const setLoadingMessage = (dispatch: Dispatch): void => {
  dispatch(
    editMessage({ type: MessageTypeEnum.Loading, text: "Handling operation" })
  );
};

export const setSuccessMessage = (dispatch: Dispatch, text: string): void => {
  dispatch(editMessage({ type: MessageTypeEnum.Success, text }));
};
