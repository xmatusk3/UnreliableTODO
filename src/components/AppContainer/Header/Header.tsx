import React, { Component } from "react";
import { connect } from "react-redux";

import { HeaderProps, HeaderReduxProps, HeaderActions } from "./types";
import { editSession } from "../../../actions";
import "./Header.css";
import { TodoState } from "../../../reducers/types";

class Header extends Component<HeaderProps> {
  onDelete = () => {
    if (window.confirm("Are you sure you want to delete current session?")) {
      this.props.editSession(undefined, this.props.onDeleteClick);
    }
  };

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
                title="Edit session"
                onClick={this.props.onEditClick}
              />
              <i
                className="fas fa-times"
                title="Delete session"
                onClick={this.onDelete}
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
    } as HeaderReduxProps),
  { editSession } as HeaderActions
)(Header);
