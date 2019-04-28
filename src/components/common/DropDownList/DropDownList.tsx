import React from "react";

import { DropDownListProps } from "./types";
import "./DropDownList.css";

const DropDownList: React.FC<DropDownListProps> = props => {
  return (
    <select onChange={props.onChange} defaultValue={props.defaultValue}>
      {Object.keys(props.valueTextMap).map(key => (
        <option key={key} value={key}>
          {props.valueTextMap[key]}
        </option>
      ))}
    </select>
  );
};

export default DropDownList;
