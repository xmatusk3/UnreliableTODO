import {
  DeleteItemAction,
  EditItemAction,
  SaveAllItemsAction,
  AddItemAction,
  DELETE_ITEM,
  EDIT_ITEM,
  TodoItem,
  TodoItemPriorityEnum,
  SAVE_ITEMS,
  ADD_ITEM
} from "../../../actions/items/types";
import {
  deleteItemActionCreator,
  editItemActionCreator,
  saveTodosActionCreator,
  addItemActionCreator
} from "../../../actions";
import { ItemsState } from "../../../reducers/items/types";

describe("items action creators", () => {
  const id = "fakeGuid";
  const item: TodoItem = {
    created: "fakeCreated",
    isCompleted: false,
    text: "fakeText",
    updated: "fakeUpdated",
    urgency: TodoItemPriorityEnum.Medium,
    id
  };

  describe("delete item action", () => {
    it("returns correct action", () => {
      const expectedAction: DeleteItemAction = {
        type: DELETE_ITEM,
        payload: {
          id
        }
      };

      expect(deleteItemActionCreator(id)).toEqual(expectedAction);
    });
  });

  describe("edit item action", () => {
    it("returns correct action", () => {
      const expectedAction: EditItemAction = {
        type: EDIT_ITEM,
        payload: item
      };

      expect(editItemActionCreator(item)).toEqual(expectedAction);
    });
  });

  describe("add item action", () => {
    it("returns correct action", () => {
      const expectedAction: AddItemAction = {
        type: ADD_ITEM,
        payload: item
      };

      expect(addItemActionCreator(item)).toEqual(expectedAction);
    });
  });

  describe("save all todos action", () => {
    it("returns correct action", () => {
      const fakeState: ItemsState = { [id]: item };
      const expectedAction: SaveAllItemsAction = {
        type: SAVE_ITEMS,
        payload: fakeState
      };

      expect(saveTodosActionCreator(fakeState)).toEqual(expectedAction);
    });
  });
});
