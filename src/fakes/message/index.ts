import { MessageState } from "../../reducers/message/types";
import { MessageTypeEnum } from "../../actions/message/types";

const fakeText = "fakeText";
const fakeType = MessageTypeEnum.Success;

export const getFakeMessageState = (): MessageState => ({
  text: fakeText,
  type: fakeType
});
