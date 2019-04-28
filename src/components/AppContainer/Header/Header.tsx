import React, { Component } from "react";

import { HeaderProps } from "./types";
import "./Header.css";

class Header extends Component<HeaderProps> {
  render() {
    return (
      <div className="header">
        <div className="header-text">
          <h1>TASK</h1>
          <h1>BASK</h1>
        </div>
        <div className="header-actions">
          <i
            className="fas fa-cog"
            title="Edit session"
            onClick={this.props.onEditClick}
          />
          <i className="fas fa-times" title="Delete session" />
        </div>
      </div>
    );
  }
}

export default Header;
