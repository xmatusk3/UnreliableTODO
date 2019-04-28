import React from "react";

import "./Header.css";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = props => {
  return (
    <div className="header">
      <div className="header-text">
        <h1>TASK</h1>
        <h1>BASK</h1>
      </div>
      <div className="header-edit">
        <i
          className="fas fa-cog"
          title="Edit session"
          onClick={props.onEditClick}
        />
      </div>
    </div>
  );
};

export default Header;
