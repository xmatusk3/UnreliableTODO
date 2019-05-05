const api = require("../../../api");

import { itemB } from "../../../fakes/items";
import { addItem, editMessage, addItemActionCreator } from "../../../actions";
import { Dispatch } from "redux";
import { getFakeState } from "../../../fakes";
import { TodoState } from "../../../reducers/types";
import { parseItemResponse } from "../../../utils";
import { MessageTypeEnum } from "../../../actions/message/types";

jest.mock("../../../api");

describe("items thunks", () => {
  let dispatch: Dispatch;
  let getState: () => TodoState;
  let successCallback: () => void;

  describe("add item thunk", () => {
    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn(getFakeState);
      successCallback = jest.fn();
    });

    it("dispatches correct actions with successful request", async () => {
      (api.post as jest.Mock).mockReturnValue({ data: { todo: itemB } });
      await addItem(itemB, successCallback)(dispatch, getState, {});

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toBeCalledWith(
        editMessage({ type: MessageTypeEnum.Loading, text: "Adding item..." })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Success,
          text: "Successfully added the item!"
        })
      );
      expect(dispatch).toHaveBeenCalledWith(
        addItemActionCreator(parseItemResponse(itemB))
      );
      expect(successCallback).toHaveBeenCalled();
    });

    it("dispatches correct actions with unsuccessful request", async () => {
      (api.post as jest.Mock).mockReturnValue("ERROR");
      await addItem(itemB, successCallback)(dispatch, getState, {});
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Error,
          text: "Error, failed to add the item."
        })
      );
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toBeCalledWith(
        editMessage({ type: MessageTypeEnum.Loading, text: "Adding item..." })
      );
      expect(successCallback).not.toHaveBeenCalled();
    });
  });
});
