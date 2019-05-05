const api = require("../../../api");
const itemActions = require("../../../actions/items");

import { TodoState } from "../../../reducers/types";
import { Dispatch } from "redux";
import {
  fakeSessionId,
  fakeErrorRate,
  fakeDisplayName,
  getFakeSessionState,
  fakeSessions
} from "../../../fakes/session";
import {
  addSession,
  editMessage,
  editSessionActionCreator,
  editSession
} from "../../../actions";
import { getFakeState } from "../../../fakes";
import { MessageTypeEnum } from "../../../actions/message/types";
import { INIT_STATE } from "../../../reducers/session";
import { Session } from "../../../actions/session/types";

jest.mock("../../../api");
jest.mock("../../../actions/items");

describe("session thunks", () => {
  let dispatch: Dispatch;
  let getState: () => TodoState;
  let successCallback: () => void;
  describe("add session", () => {
    beforeEach(() => {
      dispatch = jest.fn();
      getState = getFakeState;
      successCallback = jest.fn();
    });

    it("dispatches correct actions when successful", async () => {
      (api.post as jest.Mock).mockReturnValue({
        data: { sessionId: fakeSessionId, errorRate: fakeErrorRate }
      });
      (itemActions.getAllTodos as jest.Mock).mockImplementation(() => () => {});
      await addSession(fakeErrorRate, fakeDisplayName, successCallback)(
        dispatch,
        getState,
        {}
      );

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Loading,
          text: "Adding session..."
        })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editSessionActionCreator(getFakeSessionState())
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Success,
          text: "Successfully added the session!"
        })
      );
      expect(successCallback).toHaveBeenCalled();
    });

    it("dispatches correct actions when unsuccessful", async () => {
      (api.post as jest.Mock).mockReturnValue("ERROR");
      await addSession(fakeErrorRate, fakeDisplayName, successCallback)(
        dispatch,
        getState,
        {}
      );

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Loading,
          text: "Adding session..."
        })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Error,
          text: "Error, failed to add a session."
        })
      );
      expect(successCallback).not.toHaveBeenCalled();
    });
  });

  describe("edit session", () => {
    beforeEach(() => {
      dispatch = jest.fn();
      getState = getFakeState;
      successCallback = jest.fn();
    });

    it("dispatches correct actions when editing a session", async () => {
      const expectedErrorRate = 100;
      const expectedSession: Session = {
        displayName: "newName",
        errorRate: expectedErrorRate,
        sessionId: fakeSessionId
      };
      (api.patch as jest.Mock).mockReturnValue({
        data: { errorRate: expectedErrorRate }
      });

      await editSession(expectedSession, successCallback)(
        dispatch,
        getState,
        {}
      );

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Loading,
          text: "Editing session..."
        })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editSessionActionCreator({
          ...getFakeSessionState(),
          sessions: { [fakeSessionId]: expectedSession }
        })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Success,
          text: "Successfully edited the session!"
        })
      );
      expect(successCallback).toHaveBeenCalled();
    });

    it("dispatches correct actions when deleting a session", async () => {
      (api.del as jest.Mock).mockImplementation(jest.fn());
      await editSession(undefined, successCallback)(dispatch, getState, {});

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Loading,
          text: "Editing session..."
        })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editSessionActionCreator({ ...INIT_STATE })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Success,
          text: "Successfully edited the session!"
        })
      );
      expect(successCallback).toHaveBeenCalled();
    });

    it("dispatches correct actions when unsuccessful", async () => {
      (api.patch as jest.Mock).mockReturnValue("ERROR");
      await editSession(fakeSessions[fakeSessionId], successCallback)(
        dispatch,
        getState,
        {}
      );

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Loading,
          text: "Editing session..."
        })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Error,
          text: "Error, failed to edit the session."
        })
      );
      expect(successCallback).not.toHaveBeenCalled();
    });
  });
});
