import {
  EditItemAction,
  EDIT_ITEM,
  DeleteItemAction,
  DELETE_ITEM,
  ADD_ITEM,
  ItemResponse,
  AddItemAction,
  TodoItem,
  SAVE_ITEMS,
  AllItemsResponse,
  SaveAllItemsAction
} from "./types";
import { ThunkAction } from "redux-thunk";
import { TodoState, TodoActionTypes } from "../../reducers/types";
import {
  setLoadingMessage,
  setSuccessMessage,
  setErrorMessage
} from "../../utils";
import api from "../../api";
import { ItemsState } from "../../reducers/items/types";

export const addItem = (
  item: TodoItem,
  successCallback?: () => void
): ThunkAction<Promise<void>, TodoState, {}, TodoActionTypes> => async (
  dispatch,
  getState
) => {
  try {
    setLoadingMessage(dispatch);

    const { data } = await api.post<ItemResponse>(
      "todos",
      JSON.stringify({
        text: item.text,
        isCompleted: false,
        urgency: item.urgency
      }),
      getState().session.selectedId as string
    );

    dispatch(addItemActionCreator(parseItemResponse(data.todo)));
    setSuccessMessage(dispatch, "Operation successful!");
    successCallback && successCallback();
  } catch {
    setErrorMessage(dispatch, "Error, please try again.");
  }
};

export const deleteItem = (
  itemId: string,
  successCallback?: () => void
): ThunkAction<Promise<void>, TodoState, {}, TodoActionTypes> => async (
  dispatch,
  getState
) => {
  try {
    setLoadingMessage(dispatch);

    await api.del(`todos/${itemId}`, getState().session.selectedId as string);

    dispatch(deleteItemActionCreator(itemId));
    setSuccessMessage(dispatch, "Operation successful!");
    successCallback && successCallback();
  } catch {
    setErrorMessage(dispatch, "Error, please try again.");
  }
};

export const editItem = (
  { id, text, isCompleted, urgency }: TodoItem,
  successCallback?: () => void
): ThunkAction<Promise<void>, TodoState, {}, TodoActionTypes> => async (
  dispatch,
  getState
) => {
  try {
    setLoadingMessage(dispatch);

    const { data } = await api.patch<ItemResponse>(
      `todos/${id}`,
      JSON.stringify({
        text,
        isCompleted,
        urgency
      }),
      getState().session.selectedId as string
    );

    dispatch(editItemActionCreator(parseItemResponse(data.todo)));
    setSuccessMessage(dispatch, "Operation successful!");
    successCallback && successCallback();
  } catch {
    setErrorMessage(dispatch, "Error, please try again.");
  }
};

export const getAllTodos = (
  sessionId: string,
  successCallback?: () => void
): ThunkAction<
  Promise<void>,
  TodoState,
  {},
  TodoActionTypes
> => async dispatch => {
  try {
    setLoadingMessage(dispatch, "Fetching Todo items...");

    const { data } = await api.get<AllItemsResponse>("todos", sessionId);

    dispatch(saveTodosActionCreator(data.todos));
    setSuccessMessage(dispatch, "Items fetched successfully!");
    successCallback && successCallback();
  } catch {
    setErrorMessage(dispatch, "Error fetching items.");
  }
};

const saveTodosActionCreator = (items: ItemsState) =>
  ({
    type: SAVE_ITEMS,
    payload: items
  } as SaveAllItemsAction);

const addItemActionCreator = (item: TodoItem) =>
  ({
    type: ADD_ITEM,
    payload: item
  } as AddItemAction);

export const editItemActionCreator = (item: TodoItem) =>
  ({
    type: EDIT_ITEM,
    payload: item
  } as EditItemAction);

const deleteItemActionCreator = (id: string) =>
  ({
    type: DELETE_ITEM,
    payload: {
      id
    }
  } as DeleteItemAction);

const parseItemResponse = (item: TodoItem): TodoItem => {
  return {
    ...item,
    created: new Date(item.created).toLocaleString(),
    updated: new Date(item.updated).toLocaleString()
  };
};
