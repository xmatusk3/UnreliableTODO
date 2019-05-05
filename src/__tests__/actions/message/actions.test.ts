import { editMessage } from "../../../actions";
import {
  EditMessageAction,
  EDIT_MESSAGE,
  Message
} from "../../../actions/message/types";
import { fakeMessageType, fakeMessageText } from "../../../fakes/message";

describe("message action creators", () => {
  describe("edit message action", () => {
    it("returns correct action", () => {
      const expectedAction: EditMessageAction = {
        type: EDIT_MESSAGE,
        payload: { type: fakeMessageType, text: fakeMessageText }
      };

      expect(editMessage({ ...(expectedAction.payload as Message) })).toEqual(
        expectedAction
      );
    });
  });
});
