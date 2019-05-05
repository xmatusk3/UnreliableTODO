import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  SAVE_ITEMS,
  AddItemAction,
  DeleteItemAction,
  EditItemAction
} from "../../../actions/items/types";
import itemsReducer, { INIT_STATE } from "../../../reducers/items";
import { ItemsState } from "../../../reducers/items/types";
import {
  getFakeItemsState,
  itemA,
  idA,
  idB,
  itemB
} from "../../../fakes/items";
import { EDIT_SESSION } from "../../../actions/session/types";
import { getFakeSessionState } from "../../../fakes/session";

describe("items reducer", () => {
  let fakeState: ItemsState;

  beforeEach(() => {
    fakeState = getFakeItemsState();
  });

  it("handles ADD_ITEM", () => {
    expect(
      itemsReducer(INIT_STATE, {
        type: ADD_ITEM,
        payload: itemA
      } as AddItemAction)
    ).toEqual(fakeState);
  });

  it("handles DELETE_ITEM", () => {
    expect(
      itemsReducer(fakeState, {
        type: DELETE_ITEM,
        payload: { id: idA }
      } as DeleteItemAction)
    ).toEqual({});
  });

  it("handles EDIT_ITEM", () => {
    expect(
      itemsReducer(fakeState, {
        type: EDIT_ITEM,
        payload: {
          ...itemA,
          text: "newText"
        }
      } as EditItemAction)
    ).toEqual({ ...fakeState, [idA]: { ...itemA, text: "newText" } });
  });

  describe("handles SAVE_ITEMS", () => {
    beforeEach(() => {
      fakeState = getFakeItemsState();
    });
    const expectedState: ItemsState = { ...fakeState, [idB]: itemB };

    it("when state is empty", () => {
      expect(
        itemsReducer(INIT_STATE, {
          type: SAVE_ITEMS,
          payload: expectedState
        })
      ).toEqual(expectedState);
    });

    it("when state is not empty", () => {
      expect(
        itemsReducer(fakeState, {
          type: SAVE_ITEMS,
          payload: expectedState
        })
      ).toEqual(expectedState);
    });
  });

  describe("handles EDIT_SESSION", () => {
    it("when payload is truthy", () => {
      expect(
        itemsReducer(fakeState, {
          type: EDIT_SESSION,
          payload: getFakeSessionState()
        })
      ).toEqual(fakeState);
    });

    it("when payload is falsy", () => {
      expect(
        itemsReducer(fakeState, {
          type: EDIT_SESSION,
          payload: { sessions: {} }
        })
      ).toEqual({ ...INIT_STATE });
    });
  });
});
