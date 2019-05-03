import { SessionState } from "./types";
import { Reducer } from "redux";
import {
  EDIT_SESSION,
  SessionActionTypes,
  EditSessionAction,
  SELECT_SESSION,
  SelectSessionAction
} from "../../actions/session/types";

const INIT_STATE: SessionState = {
  sessions: {}
};

const sessionReducer: Reducer<SessionState, SessionActionTypes> = (
  state = INIT_STATE,
  { type, payload }
) => {
  switch (type) {
    case EDIT_SESSION:
      return {
        selectedId: (payload as EditSessionAction["payload"]).selectedId,
        sessions: { ...(payload as EditSessionAction["payload"]).sessions }
      };
    case SELECT_SESSION:
      return {
        ...state,
        selectedId: payload as SelectSessionAction["payload"]
      };
    default:
      return state;
  }
};

export default sessionReducer;
