import { SessionState } from "../../reducers/session/types";

const fakeSessionId = "fakeSessionId";
const fakeDisplayName = "fakeDisplayName";
const fakeErrorRate = 10;

export const getFakeSessionState = (): SessionState => ({
  selectedId: fakeSessionId,
  sessions: {
    [fakeSessionId]: {
      sessionId: fakeSessionId,
      displayName: fakeDisplayName,
      errorRate: fakeErrorRate
    }
  }
});
