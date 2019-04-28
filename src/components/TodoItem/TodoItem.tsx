import React, { useState } from "react";

import "./TodoItem.css";
import { TodoItemProps } from "./types";
import ItemActions from "../ItemActions/ItemActions";

const TodoItem: React.FC<TodoItemProps> = props => {
  const [isEditMode, setEditMode] = useState(false);

  const editCallback = isEditMode ? undefined : () => setEditMode(true);
  const completeCallback = isEditMode
    ? () => props.editCallback(props.id, props.text, props.priority)
    : () => props.completeCallback(props.id);
  const deleteCallback = isEditMode
    ? () => setEditMode(false)
    : () => props.deleteCallback(props.id);
  const completeTitle = isEditMode ? "Finish editing" : "Complete task";
  const deleteTitle = isEditMode ? "Cancel editing" : "Delete task";

  return (
    <div
      className="todo-item-container"
      item-priority={props.priority}
      is-completed={`${props.isCompleted}`}
    >
      <div className="todo-item-text">{props.text}</div>
      {!props.isCompleted && (
        <ItemActions
          editCallback={editCallback}
          completeCallback={completeCallback}
          deleteCallback={deleteCallback}
          editTitle="Edit task"
          completeTitle={completeTitle}
          deleteTitle={deleteTitle}
        />
      )}
    </div>
  );
};

export default TodoItem;
