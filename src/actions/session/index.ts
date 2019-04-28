import { EditSessionAction, EDIT_SESSION } from "./types";
import { Session } from "./types";

export const editSession = (session?: Session) =>
  ({
    type: EDIT_SESSION,
    payload: session
  } as EditSessionAction);
