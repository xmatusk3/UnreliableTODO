import React, { Component } from "react";
import { connect } from "react-redux";

import ItemActions from "../Todos/ItemActions/ItemActions";
import {
  EditSessionReduxProps,
  EditSessionProps,
  EditSessionState,
  EditSessionActions
} from "./types";
import { editSession, addSession } from "../../actions/session";
import "./EditSession.css";
import { TodoState } from "../../reducers/types";
import { editMessage } from "../../actions";
import { MessageTypeEnum } from "../../actions/message/types";

class EditSession extends Component<EditSessionProps, EditSessionState> {
  constructor(props: any) {
    super(props);

    this.state = {
      errorRate: this.props.session ? this.props.session.errorRate : 0
    };
  }

  onComplete = () => {
    this.props.isAdding
      ? this.props.addSession(
          this.state.errorRate,
          "PLACEHOLDER",
          this.props.cancelCallback
        )
      : this.props.editSession(
          {
            ...this.props.session,
            errorRate: this.state.errorRate
          },
          this.props.cancelCallback
        );
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;

    if (value >= 0 && value <= 100) {
      this.setState({ errorRate: value });
    } else {
      this.props.editMessage({
        text: "Error rate must be between 0 and 100",
        type: MessageTypeEnum.Error
      });
    }
  };

  render() {
    return (
      <div className="edit-session">
        <div className="edit-session-content">
          <div className="edit-session-failure-rate">
            <div>Server failure rate:</div>
            <input
              type="number"
              min="0"
              max="100"
              value={this.state.errorRate}
              onChange={this.onChange}
            />
          </div>
          <ItemActions
            completeCallback={this.onComplete}
            deleteCallback={this.props.cancelCallback}
            deleteTitle="Cancel"
            completeTitle="Apply"
          />
        </div>
      </div>
    );
  }
}

export default connect(
  ({ session }: TodoState) =>
    ({
      session: session.selectedId && session.sessions[session.selectedId]
    } as EditSessionReduxProps),
  { editSession, editMessage, addSession } as EditSessionActions
)(EditSession);
