import { SessionState } from "../../reducers/session/types";

export const fakeSessionId = "fakeSessionId";
export const fakeDisplayName = "fakeDisplayName";
export const fakeErrorRate = 10;
export const fakeSessions = {
  [fakeSessionId]: {
    sessionId: fakeSessionId,
    displayName: fakeDisplayName,
    errorRate: fakeErrorRate
  }
};

export const getFakeSessionState = (): SessionState => ({
  selectedId: fakeSessionId,
  sessions: fakeSessions
});
