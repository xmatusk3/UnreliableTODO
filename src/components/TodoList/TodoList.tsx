import React, { Component } from "react";
import { connect } from "react-redux";

import { TodoState } from "../../reducers/types";
import { TodoListReduxProps, TodoListState } from "./types";
import TodoItem from "../TodoItem/TodoItem";
import {
  editItem,
  completeItem,
  deleteItem,
  addItem
} from "../../actions/items";
import "./TodoList.css";
import { TodoItemPriorityEnum } from "../TodoItem/types";

class TodoList extends Component<TodoListReduxProps, TodoListState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isAdding: false
    };
  }

  toggleAdd = () => {
    this.setState({ isAdding: !this.state.isAdding });
  };

  onAddItem = (text: string, priority: TodoItemPriorityEnum) => {
    this.props.addItem({
      created: new Date(Date.now()),
      updated: new Date(Date.now()),
      id: `${Date.now()}`,
      isCompleted: false,
      priority,
      text
    });
    this.toggleAdd();
  };

  renderItems() {
    return Object.values(this.props.items).map(item => (
      <TodoItem
        priority={item.priority}
        text={item.text}
        key={item.id}
        id={item.id}
        isCompleted={item.isCompleted}
        editCallback={this.props.editItem}
        completeCallback={this.props.completeItem}
        deleteCallback={this.props.deleteItem}
      />
    ));
  }

  renderAddItem = () =>
    this.state.isAdding && (
      <TodoItem
        priority={TodoItemPriorityEnum.Medium}
        text=""
        key="addingItem"
        id=""
        editModeOnly={true}
        isCompleted={false}
        editCallback={(_: any, text: string, priority: TodoItemPriorityEnum) =>
          this.onAddItem(text, priority)
        }
        deleteCallback={this.toggleAdd}
        completeCallback={() => null}
      />
    );

  render() {
    return (
      <div className="todo-list">
        <div className="todo-list-add">
          <i className="fas fa-plus" onClick={this.toggleAdd} />
        </div>
        <div>
          {this.renderAddItem()}
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ items }: TodoState) => ({
    items
  }),
  { editItem, deleteItem, completeItem, addItem }
)(TodoList);
