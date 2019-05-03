import { APIResponse } from "..";
import { SessionState } from "../../reducers/session/types";

export const EDIT_SESSION = "EDIT_SESSION";
export const SELECT_SESSION = "SELECT_SESSION";

export interface Session {
  readonly sessionId: string;
  readonly errorRate: number;
  readonly displayName: string;
}

export interface SessionResponse extends APIResponse {
  sessionId: string;
  errorRate: number;
}

export interface EditSessionAction {
  readonly type: typeof EDIT_SESSION;
  readonly payload: SessionState;
}

export interface SelectSessionAction {
  readonly type: typeof SELECT_SESSION;
  readonly payload: string;
}

export type SessionActionTypes = EditSessionAction | SelectSessionAction;
