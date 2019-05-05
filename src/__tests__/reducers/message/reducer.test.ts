import messageReducer, { INIT_STATE } from "../../../reducers/message";
import {
  fakeMessageText,
  fakeMessageType,
  getFakeMessageState
} from "../../../fakes/message";
import { editMessage } from "../../../actions";

describe("message reducer", () => {
  it("handles EDIT_MESSAGE", () => {
    expect(
      messageReducer(
        INIT_STATE,
        editMessage({ text: fakeMessageText, type: fakeMessageType })
      )
    ).toEqual(getFakeMessageState());
  });
});
