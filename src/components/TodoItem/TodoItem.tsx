import React, { useState } from "react";

import "./TodoItem.css";
import { TodoItemProps, TodoItemPriorityEnum } from "./types";
import ItemActions from "../ItemActions/ItemActions";

const TodoItem: React.FC<TodoItemProps> = props => {
  const [isEditMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(props.text);
  const [priority, setPriority] = useState(props.priority);

  const editCallback = isEditMode ? undefined : () => setEditMode(true);
  const completeCallback = isEditMode
    ? () => {
        props.editCallback(props.id, newText, priority);
        setEditMode(false);
      }
    : () => {
        props.completeCallback(props.id);
      };
  const deleteCallback = isEditMode
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
        <select
          onChange={event => setPriority(parseInt(event.target.value))}
          value={priority}
        >
          <option value={TodoItemPriorityEnum.Highest}>Highest</option>
          <option value={TodoItemPriorityEnum.Higher}>Higher</option>
          <option value={TodoItemPriorityEnum.Medium}>Medium</option>
          <option value={TodoItemPriorityEnum.Lower}>Lower</option>
          <option value={TodoItemPriorityEnum.Lowest}>Lowest</option>
        </select>
      </div>
    </div>
  );

  return (
    <div
      className="todo-item-container"
      item-priority={props.priority}
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
