export const EDIT_SESSION = "EDIT_SESSION";
export const DELETE_SESSION = "DELETE_SESSION";

export interface Session {
  readonly sessionId: string;
  readonly errorRate: number;
}

export interface EditSessionAction {
  readonly type: typeof EDIT_SESSION;
  readonly payload: Session;
}

export type SessionActionTypes = EditSessionAction;
