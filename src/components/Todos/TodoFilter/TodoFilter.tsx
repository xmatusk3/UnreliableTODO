import React from "react";

import { TodoFilterProps } from "./types";
import DropDownList from "../../common/DropDownList/DropDownList";
import { getPriorityDDLValues } from "../../../utils";
import "./TodoFilter.css";
import { TodoItem } from "../../../actions/items/types";

const TodoFilter: React.FC<TodoFilterProps> = props => {
  const defaultValue = "Any";
  const completedValue = "Completed";
  const ddlData = getPriorityDDLValues();
  ddlData[completedValue] = completedValue;
  ddlData[defaultValue] = defaultValue;

  const getFilter = (selected: string) => (item: TodoItem) => {
    return (
      (item.urgency === parseInt(selected) && !item.isCompleted) ||
      selected === defaultValue ||
      (selected === completedValue && item.isCompleted)
    );
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
