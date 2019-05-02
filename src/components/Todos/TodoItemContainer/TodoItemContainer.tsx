import React, { useState } from "react";

import { TodoItemContainerProps } from "./types";
import TodoItem from "../TodoItem/TodoItem";
import TodoItemEdit from "../TodoItemEdit/TodoItemEdit";
import "./TodoItemContainer.css";

const TodoItemContainer: React.FC<TodoItemContainerProps> = props => {
  const [isEditMode, setEditMode] = useState(!!props.editModeOnly);

  return props.editModeOnly || isEditMode ? (
    <TodoItemEdit
      item={props.item}
      editModeOnly={props.editModeOnly}
      cancelCallback={
        props.editModeOnly ? props.deleteCallback : () => setEditMode(false)
      }
      applyCallback={props.editCallback}
      applyTitle="Apply edit"
      cancelTitle="Cancel editing"
    />
  ) : (
    <TodoItem
      item={props.item}
      cancelCallback={props.deleteCallback}
      completeCallback={props.completeCallback}
      editCallback={() => setEditMode(true)}
      deleteTitle="Delete"
      completeTitle="Complete"
      editTitle="Edit"
    />
  );
};

export default TodoItemContainer;
