import React from "react";

import { DropDownListProps } from "./types";
import "./DropDownList.css";

const DropDownList: React.FC<DropDownListProps> = props => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
    >
      {Object.keys(props.valueTextMap)
        .sort(
          (priorityA, priorityB) => parseInt(priorityB) - parseInt(priorityA)
        )
        .map(key => (
          <option key={key} value={key}>
            {props.valueTextMap[key]}
          </option>
        ))}
    </select>
  );
};

export default DropDownList;
