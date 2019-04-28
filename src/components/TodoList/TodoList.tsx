import React, { Component } from "react";
import { connect } from "react-redux";

import { TodoState } from "../../reducers/types";
import { TodoListReduxProps } from "./types";
import TodoItem from "../TodoItem/TodoItem";
import { editItem, completeItem, deleteItem } from "../../actions/items";
import "./TodoList.css";

class TodoList extends Component<TodoListReduxProps> {
  renderItems() {
    return Object.values(this.props.items).map(item => (
      <TodoItem
        priority={item.priority}
        text={item.text}
        key={item.id}
        id={item.id}
        editCallback={this.props.editItem}
        completeCallback={this.props.completeItem}
        deleteCallback={this.props.deleteItem}
      />
    ));
  }

  render() {
    return <div className="todo-list">{this.renderItems()}</div>;
  }
}

export default connect(
  ({ items }: TodoState) => ({
    items
  }),
  { editItem, deleteItem, completeItem }
)(TodoList);
