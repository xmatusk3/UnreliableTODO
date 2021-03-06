import React, { Component } from "react";
import { connect } from "react-redux";

import { MessageProps, MessageReduxProps, MessageActions } from "./types";
import { TodoState } from "../../../reducers/types";
import { MessageTypeEnum } from "../../../actions/message/types";
import { editMessage } from "../../../actions";
import "./Message.css";

class Message extends Component<MessageProps> {
  timeoutId: number = 0;

  componentDidUpdate() {
    this.clearMessage();
  }

  componentDidMount() {
    this.clearMessage();
  }

  clearMessage = () => {
    if (
      this.props.type !== undefined &&
      this.props.type !== MessageTypeEnum.Loading
    ) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => this.props.editMessage(), 3000) as any;
    }
  };

  getIconClass = () => {
    switch (this.props.type) {
      case MessageTypeEnum.Success: {
        return "fa-check-circle";
      }
      case MessageTypeEnum.Error: {
        return "fa-exclamation-circle";
      }
      default:
        return "fa-spinner";
    }
  };

  render() {
    return (
      <div
        className="message"
        message-type={
          MessageTypeEnum[this.props.type !== undefined ? this.props.type : -1]
        }
      >
        <div className="message-content">
          <i className={`fas ${this.getIconClass()}`} />
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ message }: TodoState) =>
    ({
      text: message.text,
      type: message.type
    } as MessageReduxProps),
  { editMessage } as MessageActions
)(Message);
