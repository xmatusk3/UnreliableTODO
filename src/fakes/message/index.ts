import { MessageState } from "../../reducers/message/types";
import { MessageTypeEnum } from "../../actions/message/types";

export const fakeMessageText = "fakeText";
export const fakeMessageType = MessageTypeEnum.Success;

export const getFakeMessageState = (): MessageState => ({
  text: fakeMessageText,
  type: fakeMessageType
});
