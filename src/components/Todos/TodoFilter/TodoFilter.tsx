import React from "react";

import { TodoFilterProps } from "./types";
import DropDownList from "../../common/DropDownList/DropDownList";
import { getPriorityDDLValues } from "../../../utils";
import "./TodoFilter.css";
import { TodoItem } from "../../../actions/items/types";

const TodoFilter: React.FC<TodoFilterProps> = props => {
  const defaultValue = "Any";
  const ddlData = getPriorityDDLValues();
  ddlData[defaultValue] = defaultValue;

  const getFilter = (selected: string) => (item: TodoItem) => {
    return item.urgency === parseInt(selected) || selected === defaultValue;
  };

  return (
    <div className="todo-filter">
      Bask in tasks with
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
