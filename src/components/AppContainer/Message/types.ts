import { MessageTypeEnum } from "../../../actions/message/types";
import { editMessage } from "../../../actions";

export interface MessageReduxProps {
  readonly text?: string;
  readonly type?: MessageTypeEnum;
}

export interface MessageActions {
  readonly editMessage: typeof editMessage;
}

export interface MessageProps extends MessageReduxProps, MessageActions {}
