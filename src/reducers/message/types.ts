import { MessageTypeEnum } from "../../actions/message/types";

export interface MessageState {
  type?: MessageTypeEnum;
  text?: string;
}
