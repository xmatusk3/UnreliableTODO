import React, { Component } from "react";

import "./Header.css";
import { HeaderProps } from "./types";

class Header extends Component<HeaderProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
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
            onClick={this.props.onEditClick}
          />
        </div>
      </div>
    );
  }
}

export default Header;
