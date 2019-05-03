export interface SessionState {
  readonly selectedId?: string;
  readonly sessions: {
    [sessionId: string]: {
      readonly displayName: string;
      readonly sessionId: string;
      readonly errorRate: number;
    };
  };
}
