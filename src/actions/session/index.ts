import { ThunkAction } from "redux-thunk";
import { AxiosResponse } from "axios";
import _ from "lodash";

import {
  EditSessionAction,
  SelectSessionAction,
  EDIT_SESSION,
  SessionResponse,
  SELECT_SESSION
} from "./types";
import { Session } from "./types";
import { TodoActionTypes, TodoState } from "../../reducers/types";
import {
  setLoadingMessage,
  setSuccessMessage,
  setErrorMessage
} from "../../utils";
import api from "../../api";
import { SessionState } from "../../reducers/session/types";
import { Dispatch } from "redux";
import { getAllTodos } from "../items";

export const addSession = (
  errorRate: number,
  displayName: string,
  successCallback?: () => void
): ThunkAction<Promise<void>, TodoState, {}, TodoActionTypes> => async (
  dispatch: Dispatch,
  getState: () => TodoState
) => {
  try {
    setLoadingMessage(dispatch, "Adding session...");
    const sessionState = getState().session;
    let { data } = await createSession(errorRate);

    dispatch(
      editSessionActionCreator({
        selectedId: data.sessionId,
        sessions: {
          ...sessionState.sessions,
          [data.sessionId]: {
            sessionId: data.sessionId,
            errorRate: data.errorRate,
            displayName
          }
        }
      })
    );

    setSuccessMessage(dispatch, "Successfully added the session!");
    successCallback && successCallback();
    getAllTodos(data.sessionId)(dispatch, getState, {});
  } catch {
    setErrorMessage(dispatch, "Error, failed to add a session.");
  }
};

export const editSession = (
  session?: Session,
  successCallback?: () => void
): ThunkAction<Promise<void>, TodoState, {}, TodoActionTypes> => async (
  dispatch: Dispatch,
  getState: () => TodoState
) => {
  try {
    setLoadingMessage(dispatch, "Editing session...");
    const sessionState = getState().session;

    if (!session) {
      await deleteSession(sessionState, dispatch);
    } else {
      let { data } = await updateSession(session);
      dispatch(
        editSessionActionCreator({
          selectedId: session.sessionId,
          sessions: {
            ...sessionState.sessions,
            [session.sessionId]: {
              sessionId: session.sessionId,
              errorRate: data.errorRate,
              displayName: session.displayName
            }
          }
        })
      );
    }

    setSuccessMessage(dispatch, "Successfully edited the session!");
    successCallback && successCallback();
  } catch {
    setErrorMessage(dispatch, "Error, failed to edit the session.");
  }
};

export const selectSessionActionCreator = (id: string) =>
  ({
    type: SELECT_SESSION,
    payload: id
  } as SelectSessionAction);

const editSessionActionCreator = (sessionState: SessionState) =>
  ({
    type: EDIT_SESSION,
    payload: sessionState
  } as EditSessionAction);

const deleteSession = async (
  sessionState: SessionState,
  dispatch: Dispatch
) => {
  await api.del("session", sessionState.selectedId as string);
  const newSessions = _.omit(
    sessionState.sessions,
    sessionState.selectedId as string
  );
  const sessionsValues = Object.values(newSessions);

  dispatch(
    editSessionActionCreator({
      selectedId: sessionsValues[0] && sessionsValues[0].sessionId,
      sessions: newSessions
    })
  );

  if (sessionsValues[0]) {
    getAllTodos(sessionsValues[0].sessionId)(
      dispatch,
      () => ({} as TodoState),
      {}
    );
  }
};

const updateSession = async ({
  sessionId,
  errorRate
}: Session): Promise<AxiosResponse<SessionResponse>> =>
  await api.patch<SessionResponse>(
    "session",
    JSON.stringify({ errorRate }),
    sessionId
  );

const createSession = async (
  errorRate: number
): Promise<AxiosResponse<SessionResponse>> =>
  await api.post<SessionResponse>("session", JSON.stringify({ errorRate }));
