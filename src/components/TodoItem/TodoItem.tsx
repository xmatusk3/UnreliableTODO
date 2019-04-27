import React from "react";

import "./TodoItem.css";
import { TodoItemProps } from "./types";

const TodoItem: React.FC<TodoItemProps> = props => {
  return (
    <div className="todo-item-container" item-priority={props.priority}>
      <div className="todo-item-text">{props.text}</div>
      <div className="todo-item-actions">
        <div className="todo-item-complete" title="Complete task">
          <i className="fas fa-check" />
        </div>
        <div className="todo-item-edit" title="Edit task">
          <i className="fas fa-pencil-alt" />
        </div>
        <div className="todo-item-delete" title="Edit task">
          <i className="fas fa-times" />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
