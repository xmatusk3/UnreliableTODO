export const EDIT_MESSAGE = "EDIT_MESSAGE";

export enum MessageTypeEnum {
  Error,
  Success,
  Loading
}

export interface Message {
  type: MessageTypeEnum;
  text: string;
}

export interface EditMessageAction {
  type: typeof EDIT_MESSAGE;
  payload?: Message;
}

export type MessageActionTypes = EditMessageAction;
