import React from "react";

import { TodoFilterProps } from "./types";
import DropDownList from "../DropDownList/DropDownList";
import { getPriorityDDLValues } from "../../utils";
import "./TodoFilter.css";
import { TodoItem } from "../TodoItem/types";

const TodoFilter: React.FC<TodoFilterProps> = props => {
  const defaultValue = "Every";
  const ddlData = getPriorityDDLValues();
  ddlData[defaultValue] = defaultValue;

  const getFilter = (selected: string) => (item: TodoItem) => {
    return item.priority === parseInt(selected) || selected === defaultValue;
  };

  return (
    <div className="todo-filter">
      Display tasks with
      <DropDownList
        defaultValue={defaultValue}
        onChange={event => props.onApply(getFilter(event.target.value))}
        valueTextMap={ddlData}
      />
      priority
    </div>
  );
};

export default TodoFilter;
