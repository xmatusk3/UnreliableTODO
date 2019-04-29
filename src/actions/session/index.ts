import { ThunkAction } from "redux-thunk";

import { EditSessionAction, EDIT_SESSION, SessionResponse } from "./types";
import { Session } from "./types";
import { TodoActionTypes, TodoState } from "../../reducers/types";
import {
  setLoadingMessage,
  setSuccessMessage,
  setErrorMessage
} from "../../utils";
import api from "../../api";

export const editSession = (
  successCallback: () => void,
  session?: Session
): ThunkAction<Promise<void>, TodoState, {}, TodoActionTypes> => async (
  dispatch,
  getState
) => {
  if (!session) {
    dispatch(editSessionActionCreator());
    return;
  }

  try {
    setLoadingMessage(dispatch);

    const { data } = getState().session.sessionId
      ? await api.patch<SessionResponse>(
          "session",
          JSON.stringify({ errorRate: session.errorRate }),
          session.sessionId
        )
      : await api.post<SessionResponse>(
          "session",
          JSON.stringify({ errorRate: session.errorRate })
        );

    dispatch(
      editSessionActionCreator({
        errorRate: data.errorRate,
        sessionId: session.sessionId || data.sessionId
      })
    );
    setSuccessMessage(dispatch, "Operation successful!");
    successCallback();
  } catch (e) {
    setErrorMessage(dispatch, "Error, please try again.");
  }
};

const editSessionActionCreator = (session?: Session) =>
  ({
    type: EDIT_SESSION,
    payload: session
  } as EditSessionAction);
