import React, { Component } from "react";
import { connect } from "react-redux";

import ItemActions from "../Todos/ItemActions/ItemActions";
import { EditSessionProps, EditSessionState } from "./types";
import { editSession } from "../../actions/session";
import "./EditSession.css";
import { TodoState } from "../../reducers/types";

class EditSession extends Component<EditSessionProps, EditSessionState> {
  constructor(props: any) {
    super(props);

    this.state = {
      errorRate: Object.entries(this.props.session).length
        ? this.props.session.errorRate
        : 0
    };
  }

  onComplete = () => {
    this.props.editSession(this.props.cancelCallback, {
      ...this.props.session,
      errorRate: this.state.errorRate
    });
  };

  render() {
    return (
      <div className="edit-session">
        <div className="edit-session-content">
          <div className="edit-session-input">
            <div>Server failure rate:</div>
            <input
              type="number"
              min="0"
              max="100"
              value={this.state.errorRate}
              onChange={event =>
                this.setState({ errorRate: parseInt(event.target.value) })
              }
            />
          </div>
          <ItemActions
            completeCallback={this.onComplete}
            deleteCallback={this.props.cancelCallback}
            deleteTitle="Cancel"
            completeTitle="Apply"
            editTitle=""
          />
        </div>
      </div>
    );
  }
}

export default connect(
  ({ session }: TodoState) => ({
    session
  }),
  { editSession }
)(EditSession);
