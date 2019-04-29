import { MessageState } from "./types";
import { MessageActionTypes, EDIT_MESSAGE } from "../../actions/message/types";
import { Reducer } from "redux";

const INIT_STATE: MessageState = {};

const messageReducer: Reducer<MessageState, MessageActionTypes> = (
  state = INIT_STATE,
  { type, payload }
) => {
  switch (type) {
    case EDIT_MESSAGE:
      return { ...payload };
    default:
      return state;
  }
};

export default messageReducer;
