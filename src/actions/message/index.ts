import { Message, EditMessageAction, EDIT_MESSAGE } from "./types";

export const editMessage = (message?: Message) =>
  ({
    type: EDIT_MESSAGE,
    payload: message
  } as EditMessageAction);
