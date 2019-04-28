import React, { Component } from "react";

import ItemActions from "../Todos/ItemActions/ItemActions";
import { EditSessionProps } from "./types";
import "./EditSession.css";

class EditSession extends Component<EditSessionProps> {
  onComplete = () => {
    this.props.cancelCallback();
  };

  render() {
    return (
      <div className="edit-session">
        <div className="edit-session-content">
          <div className="edit-session-input">
            <div>Server failure rate:</div>
            <input type="number" min="0" max="100" />
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

export default EditSession;
