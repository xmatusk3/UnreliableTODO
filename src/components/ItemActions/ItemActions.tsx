import React from "react";
import { ItemActionsProps } from "./types";
import "./ItemActions.css";

const ItemActions: React.FC<ItemActionsProps> = props => {
  return (
    <div className="todo-item-actions">
      {props.completeCallback && (
        <div
          className="todo-item-complete"
          title={props.completeTitle}
          onClick={() => (props.completeCallback as Function)()}
        >
          <i className="fas fa-check" />
        </div>
      )}
      {props.editCallback && (
        <div
          className="todo-item-edit"
          title={props.editTitle}
          onClick={() => (props.editCallback as Function)()}
        >
          <i className="fas fa-pencil-alt" />
        </div>
      )}
      {props.deleteCallback && (
        <div
          className="todo-item-delete"
          title={props.deleteTitle}
          onClick={() => (props.deleteCallback as Function)()}
        >
          <i className="fas fa-times" />
        </div>
      )}
    </div>
  );
};

export default ItemActions;
