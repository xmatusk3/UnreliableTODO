import React, { Component } from "react";
import { connect } from "react-redux";

import { HeaderProps, HeaderReduxProps } from "./types";
import "./Header.css";
import { TodoState } from "../../../reducers/types";

class Header extends Component<HeaderProps> {
  render() {
    return (
      <div className="header">
        <div className="header-text">
          <h1>TASK</h1>
          <h1>BASK</h1>
        </div>
        {this.props.sessionExists && (
          <div className="header-actions">
            <div className="header-actions-text">Manage session</div>
            <div className="header-actions-buttons">
              <i
                className="fas fa-cog"
                title="Manage session"
                onClick={this.props.onEditClick}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  ({ session }: TodoState) =>
    ({
      sessionExists: !!session.sessionId
    } as HeaderReduxProps)
)(Header);
