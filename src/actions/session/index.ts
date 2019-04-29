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
  session?: Session,
  successCallback?: () => void
): ThunkAction<Promise<void>, TodoState, {}, TodoActionTypes> => async (
  dispatch,
  getState
) => {
  try {
    setLoadingMessage(dispatch);

    if (!session) {
      // Delete session
      await api.del("session", getState().session.sessionId as string);
      dispatch(editSessionActionCreator());
    } else {
      let { data } =
        session.sessionId !== undefined
          ? //Update session
            await api.patch<SessionResponse>(
              "session",
              JSON.stringify({ errorRate: session.errorRate }),
              session.sessionId
            )
          : // Create session
            await api.post<SessionResponse>(
              "session",
              JSON.stringify({ errorRate: session.errorRate })
            );

      dispatch(
        editSessionActionCreator({
          errorRate: data.errorRate,
          sessionId: session.sessionId || data.sessionId
        })
      );
    }

    setSuccessMessage(dispatch, "Operation successful!");
    successCallback && successCallback();
  } catch (e) {
    setErrorMessage(dispatch, "Error, please try again.");
  }
};

const editSessionActionCreator = (session?: Session) =>
  ({
    type: EDIT_SESSION,
    payload: session
  } as EditSessionAction);
