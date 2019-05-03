import React, { useState } from "react";

import "./TodoItem.css";
import ItemActions from "../ItemActions/ItemActions";
import { TodoItemProps } from "./types";
import { TodoItemPriorityEnum } from "../../../actions/items/types";

const TodoItem: React.FC<TodoItemProps> = props => {
  const [isDescriptiveMode, setDescriptiveMode] = useState(false);

  const renderDescription = () => [
    <p key="urgency">
      <strong>Task priority: </strong>
      {TodoItemPriorityEnum[props.item.urgency]}
    </p>,
    <p key="created">
      <strong>Created: </strong>
      {props.item.created}
    </p>,
    <p key="updated">
      <strong>Updated: </strong>
      {props.item.updated}
    </p>
  ];

  return (
    <div
      className="todo-item-container todo-item-container__normal"
      item-priority={props.item.urgency}
      is-completed={`${props.item.isCompleted}`}
      onClick={() => setDescriptiveMode(!isDescriptiveMode)}
      title={isDescriptiveMode ? "Collapse" : "Expand"}
    >
      <div className="todo-item-text">
        <strong>{props.item.text}</strong>
        {isDescriptiveMode && renderDescription()}
      </div>
      <ItemActions
        editCallback={props.editCallback}
        completeCallback={() =>
          props.completeCallback({
            ...props.item,
            isCompleted: true
          })
        }
        deleteCallback={() => props.cancelCallback(props.item.id)}
        editTitle="Edit task"
        completeTitle="Complete task"
        deleteTitle="Delete task"
      />
    </div>
  );
};

export default TodoItem;
