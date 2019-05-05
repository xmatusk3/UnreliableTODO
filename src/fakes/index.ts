import { TodoState } from "../reducers/types";
import { getFakeItemsState } from "./items";
import { getFakeMessageState } from "./message";
import { getFakeSessionState } from "./session";

export const fakeState: TodoState = {
  items: getFakeItemsState(),
  message: getFakeMessageState(),
  session: getFakeSessionState()
};

export const getFakeState = (): TodoState => ({
  ...fakeState
});
