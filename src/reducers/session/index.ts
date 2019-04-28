import { SessionState } from "./types";
import { Reducer } from "redux";
import { EDIT_SESSION, SessionActionTypes } from "../../actions/session/types";

const INIT_STATE: SessionState = { sessionId: "Session!", errorRate: 50 };

const sessionReducer: Reducer<SessionState, SessionActionTypes> = (
  state = INIT_STATE,
  { type, payload }
) => {
  switch (type) {
    case EDIT_SESSION:
      return { ...payload };
    default:
      return state;
  }
};

export default sessionReducer;
