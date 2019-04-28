import React from "react";
import { ItemActionsProps } from "./types";
import "./ItemActions.css";

const ItemActions: React.FC<ItemActionsProps> = props => {
  return (
    <div className="item-actions">
      {props.deleteCallback && (
        <div
          className="item-delete"
          title={props.deleteTitle}
          onClick={() => (props.deleteCallback as Function)()}
        >
          <i className="fas fa-times" />
        </div>
      )}
      {props.editCallback && (
        <div
          className="item-edit"
          title={props.editTitle}
          onClick={() => (props.editCallback as Function)()}
        >
          <i className="fas fa-pencil-alt" />
        </div>
      )}
      {props.completeCallback && (
        <div
          className="item-complete"
          title={props.completeTitle}
          onClick={() => (props.completeCallback as Function)()}
        >
          <i className="fas fa-check" />
        </div>
      )}
    </div>
  );
};

export default ItemActions;
