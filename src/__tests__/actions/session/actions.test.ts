import {
  EditSessionAction,
  EDIT_SESSION,
  SelectSessionAction,
  SELECT_SESSION
} from "../../../actions/session/types";
import {
  fakeSessionId,
  fakeSessions,
  getFakeSessionState
} from "../../../fakes/session";
import {
  editSessionActionCreator,
  selectSessionActionCreator
} from "../../../actions";

describe("session action creators", () => {
  describe("edit session action", () => {
    it("returns correct action", () => {
      const expectedAction: EditSessionAction = {
        type: EDIT_SESSION,
        payload: {
          selectedId: fakeSessionId,
          sessions: fakeSessions
        }
      };

      expect(editSessionActionCreator(getFakeSessionState())).toEqual(
        expectedAction
      );
    });
  });

  describe("select session action", () => {
    it("returns correct action", () => {
      const expectedAction: SelectSessionAction = {
        type: SELECT_SESSION,
        payload: fakeSessionId
      };

      expect(selectSessionActionCreator(fakeSessionId)).toEqual(expectedAction);
    });
  });
});
