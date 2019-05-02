import React from "react";

import "./TodoItem.css";
import ItemActions from "../ItemActions/ItemActions";
import { TodoItemProps } from "./types";

const TodoItem: React.FC<TodoItemProps> = props => {
  return (
    <div
      className="todo-item-container"
      item-priority={props.item.urgency}
      is-completed={`${props.item.isCompleted}`}
    >
      <div className="todo-item-text">{props.item.text}</div>
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
