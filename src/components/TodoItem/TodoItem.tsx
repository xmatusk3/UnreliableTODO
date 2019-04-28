import React, { useState } from "react";

import "./TodoItem.css";
import { TodoItemProps } from "./types";
import ItemActions from "../ItemActions/ItemActions";
import DropDownList from "../DropDownList/DropDownList";
import { getPriorityDDLValues } from "../../utils";

const TodoItem: React.FC<TodoItemProps> = props => {
  const [isEditMode, setEditMode] = useState(!!props.editModeOnly);
  const [newText, setNewText] = useState(props.text);
  const [priority, setPriority] = useState(props.priority);

  // Prepare properties
  const editCallback = isEditMode ? undefined : () => setEditMode(true);
  const completeCallback = isEditMode
    ? () => {
        props.editCallback(props.id, newText, priority);
        setEditMode(false);
      }
    : () => {
        props.completeCallback(props.id);
      };
  const deleteCallback =
    isEditMode && !props.editModeOnly
      ? () => setEditMode(false)
      : () => props.deleteCallback(props.id);
  const completeTitle = isEditMode ? "Finish editing" : "Complete task";
  const deleteTitle = isEditMode ? "Cancel editing" : "Delete task";

  const renderEditFields = () => (
    <div className="todo-item-edit">
      <input
        type="text"
        placeholder="Enter new task text"
        className="todo-item-edit-text"
        value={newText}
        onChange={event => setNewText(event.target.value)}
      />
      <div className="todo-item-edit-priority">
        Priority:
        <DropDownList
          onChange={event => setPriority(parseInt(event.target.value))}
          defaultValue={`${priority}`}
          valueTextMap={getPriorityDDLValues()}
        />
      </div>
    </div>
  );

  return (
    <div
      className="todo-item-container"
      item-priority={isEditMode ? priority : props.priority}
      is-completed={`${props.isCompleted}`}
      is-edit={`${isEditMode}`}
    >
      {isEditMode ? (
        renderEditFields()
      ) : (
        <div className="todo-item-text">{props.text}</div>
      )}

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
