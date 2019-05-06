const api = require("../../../api");

import { itemB, itemA, idA, getFakeItemsState } from "../../../fakes/items";
import {
  addItem,
  editMessage,
  addItemActionCreator,
  editItem,
  editItemActionCreator,
  deleteItem,
  deleteItemActionCreator,
  getAllTodos,
  saveTodosActionCreator
} from "../../../actions";
import { Dispatch } from "redux";
import { getFakeState } from "../../../fakes";
import { TodoState } from "../../../reducers/types";
import { parseItemResponse } from "../../../utils";
import { MessageTypeEnum } from "../../../actions/message/types";
import { TodoItem } from "../../../actions/items/types";

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
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({ type: MessageTypeEnum.Loading, text: "Adding item..." })
      );
      expect(dispatch).toHaveBeenCalledWith(
        addItemActionCreator(parseItemResponse(itemB))
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Success,
          text: "Successfully added the item!"
        })
      );
      expect(successCallback).toHaveBeenCalled();
    });

    it("dispatches correct actions with unsuccessful request", async () => {
      (api.post as jest.Mock).mockReturnValue(Promise.reject());
      await addItem(itemB, successCallback)(dispatch, getState, {});

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({ type: MessageTypeEnum.Loading, text: "Adding item..." })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Error,
          text: "Error, failed to add the item."
        })
      );
      expect(successCallback).not.toHaveBeenCalled();
    });
  });

  describe("edit item thunk", () => {
    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn(getFakeState);
      successCallback = jest.fn();
    });

    it("dispatches correct actions with successful request", async () => {
      const expectedItem: TodoItem = { ...itemA, text: "newText" };
      (api.patch as jest.Mock).mockReturnValue({
        data: { todo: expectedItem }
      });
      await editItem(expectedItem, successCallback)(dispatch, getState, {});

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({ type: MessageTypeEnum.Loading, text: "Editing item..." })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editItemActionCreator(parseItemResponse(expectedItem))
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Success,
          text: "Successfully edited the item!"
        })
      );
      expect(successCallback).toHaveBeenCalled();
    });

    it("dispatches correct actions with unsuccessful request", async () => {
      (api.patch as jest.Mock).mockReturnValue(Promise.reject());
      await editItem({ ...itemA, text: "newText" }, successCallback)(
        dispatch,
        getState,
        {}
      );

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toBeCalledWith(
        editMessage({ type: MessageTypeEnum.Loading, text: "Editing item..." })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Error,
          text: "Error, failed to edit the item."
        })
      );
      expect(successCallback).not.toHaveBeenCalled();
    });
  });

  describe("delete item thunk", () => {
    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn(getFakeState);
      successCallback = jest.fn();
    });

    it("dispatches correct actions with successful request", async () => {
      (api.del as jest.Mock).mockImplementation(jest.fn);
      await deleteItem(idA, successCallback)(dispatch, getState, {});

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({ type: MessageTypeEnum.Loading, text: "Deleting item..." })
      );
      expect(dispatch).toHaveBeenCalledWith(deleteItemActionCreator(idA));
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Success,
          text: "Successfully deleted the item!"
        })
      );
      expect(successCallback).toHaveBeenCalled();
    });

    it("dispatches correct actions with unsuccessful request", async () => {
      (api.del as jest.Mock).mockReturnValue(Promise.reject());
      await deleteItem(idA, successCallback)(dispatch, getState, {});

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toBeCalledWith(
        editMessage({ type: MessageTypeEnum.Loading, text: "Deleting item..." })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Error,
          text: "Error, failed to delete the item."
        })
      );
      expect(successCallback).not.toHaveBeenCalled();
    });
  });

  describe("get all todos thunk", () => {
    beforeEach(() => {
      dispatch = jest.fn();
      getState = jest.fn(getFakeState);
      successCallback = jest.fn();
    });

    it("dispatches correct actions with successful request", async () => {
      (api.get as jest.Mock).mockReturnValue({
        data: { todos: getFakeItemsState() }
      });
      await getAllTodos(idA, successCallback)(dispatch, getState, {});

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Loading,
          text: "Fetching items..."
        })
      );
      expect(dispatch).toHaveBeenCalledWith(
        saveTodosActionCreator(getFakeItemsState())
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Success,
          text: "Successfully fetched the items!"
        })
      );
      expect(successCallback).toHaveBeenCalled();
    });

    it("dispatches correct actions with unsuccessful request", async () => {
      (api.get as jest.Mock).mockReturnValue(Promise.reject());
      await getAllTodos(idA, successCallback)(dispatch, getState, {});

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toBeCalledWith(
        editMessage({
          type: MessageTypeEnum.Loading,
          text: "Fetching items..."
        })
      );
      expect(dispatch).toHaveBeenCalledWith(
        editMessage({
          type: MessageTypeEnum.Error,
          text: "Error, failed to fetch the items."
        })
      );
      expect(successCallback).not.toHaveBeenCalled();
    });
  });
});
