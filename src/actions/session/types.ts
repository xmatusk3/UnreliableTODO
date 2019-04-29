import { APIResponse } from "..";

export const EDIT_SESSION = "EDIT_SESSION";

export interface Session {
  readonly sessionId: string;
  readonly errorRate: number;
}

export interface SessionResponse extends APIResponse {
  sessionId: string;
  errorRate: number;
}

export interface EditSessionAction {
  readonly type: typeof EDIT_SESSION;
  readonly payload?: Session;
}

export type SessionActionTypes = EditSessionAction;
