import React, { useState } from "react";

import { TodoItemEditProps } from "./types";
import DropDownList from "../../common/DropDownList/DropDownList";
import { getPriorityDDLValues } from "../../../utils";
import ItemActions from "../ItemActions/ItemActions";
import "./TodoItemEdit.css";

const TodoItemEdit: React.FC<TodoItemEditProps> = props => {
  const [priority, setPriority] = useState(props.item.urgency);
  const [newText, setNewText] = useState(props.item.text);

  const onApplyEdit = () =>
    props.applyCallback(
      {
        ...props.item,
        text: newText,
        urgency: priority
      },
      props.cancelCallback
    );

  return (
    <div
      className="todo-item-container todo-item-container__edit"
      item-priority={priority}
    >
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
            value={`${priority}`}
            valueTextMap={getPriorityDDLValues()}
          />
        </div>
      </div>
      <ItemActions
        completeCallback={onApplyEdit}
        deleteCallback={props.cancelCallback}
        completeTitle={props.applyTitle}
        deleteTitle={props.cancelTitle}
      />
    </div>
  );
};

export default TodoItemEdit;
