import sessionReducer, { INIT_STATE } from "../../../reducers/session";
import { editSessionActionCreator } from "../../../actions";
import {
  getFakeSessionState,
  fakeSessionId,
  fakeSessions
} from "../../../fakes/session";

describe("session reducer", () => {
  describe("handles EDIT_SESSION", () => {
    it("when no session is in store", () => {
      expect(
        sessionReducer(
          INIT_STATE,
          editSessionActionCreator(getFakeSessionState())
        )
      ).toEqual(getFakeSessionState());
    });

    it("when editing a session from store", () => {
      const expectedState = {
        selectedId: fakeSessionId,
        sessions: {
          [fakeSessionId]: {
            ...fakeSessions[fakeSessionId],
            displayName: "newName"
          }
        }
      };
      expect(
        sessionReducer(
          getFakeSessionState(),
          editSessionActionCreator(expectedState)
        )
      ).toEqual({ ...expectedState });
    });

    it("when deleting a session", () => {
      expect(
        sessionReducer(
          getFakeSessionState(),
          editSessionActionCreator(INIT_STATE)
        )
      ).toEqual({ ...INIT_STATE });
    });
  });
});
