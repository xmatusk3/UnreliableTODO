import React, { useState } from "react";

import { TodoFilterProps } from "./types";
import DropDownList from "../../common/DropDownList/DropDownList";
import { getPriorityDDLValues } from "../../../utils";
import "./TodoFilter.css";
import { TodoItem } from "../../../actions/items/types";

const TodoFilter: React.FC<TodoFilterProps> = props => {
  const defaultValue = "Any";
  const [value, setValue] = useState(defaultValue);

  const completedValue = "Completed";
  const ddlData = getPriorityDDLValues();
  ddlData[completedValue] = completedValue;
  ddlData[defaultValue] = defaultValue;

  const onChange = (value: string) => {
    props.onApply(getFilter(value));
    setValue(value);
  };

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
        onChange={event => onChange(event.target.value)}
        value={value}
        valueTextMap={ddlData}
      />
      priority
    </div>
  );
};

export default TodoFilter;
