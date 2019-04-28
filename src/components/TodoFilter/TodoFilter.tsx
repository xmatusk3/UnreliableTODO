import React from "react";
import { TodoFilterProps } from "./types";
import DropDownList from "../DropDownList/DropDownList";
import { getPriorityDDLValues } from "../../utils";

const TodoFilter: React.FC<TodoFilterProps> = props => {
  const defaultValue = "All";
  const ddlData = getPriorityDDLValues();
  ddlData[defaultValue] = defaultValue;

  return (
    <DropDownList
      defaultValue={defaultValue}
      onChange={event => console.log(event.target.value)}
      valueTextMap={ddlData}
    />
  );
};

export default TodoFilter;
