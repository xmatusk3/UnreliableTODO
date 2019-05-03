import React, { Component } from "react";
import { connect } from "react-redux";

import { TodoState } from "../../../reducers/types";
import {
  TodoListState,
  TodoListProps,
  TodoListReduxProps,
  TodoListActions
} from "./types";
import { editItem, deleteItem, addItem } from "../../../actions/items";
import "./TodoList.css";
import TodoFilter from "../TodoFilter/TodoFilter";
import {
  TodoItem as TodoItemInterface,
  TodoItemPriorityEnum
} from "../../../actions/items/types";
import TodoItemContainer from "../TodoItemContainer/TodoItemContainer";

class TodoList extends Component<TodoListProps, TodoListState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isAdding: false,
      filter: () => true
    };
  }

  toggleAdd = () => {
    this.setState({ isAdding: !this.state.isAdding });
  };

  onAddItem = (item: TodoItemInterface) => {
    this.props.addItem(item, this.toggleAdd);
  };

  sortItems = (itemA: TodoItemInterface, itemB: TodoItemInterface): number =>
    itemA.isCompleted
      ? 1
      : itemB.isCompleted
      ? -1
      : itemB.urgency - itemA.urgency;

  onDeleteItem = (id: string) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      this.props.deleteItem(id);
    }
  };

  renderItems() {
    return Object.values(this.props.items)
      .filter(this.state.filter)
      .sort(this.sortItems)
      .map(item => (
        <TodoItemContainer
          item={item}
          key={item.id}
          editCallback={this.props.editItem}
          completeCallback={this.props.editItem}
          deleteCallback={this.onDeleteItem}
        />
      ));
  }

  renderAddItem = () =>
    this.state.isAdding && (
      <TodoItemContainer
        item={{
          urgency: TodoItemPriorityEnum.Medium,
          created: "",
          id: "",
          text: "",
          isCompleted: false,
          updated: ""
        }}
        key="addingItem"
        editModeOnly={true}
        editCallback={(item: TodoItemInterface) => this.onAddItem(item)}
        deleteCallback={this.toggleAdd}
        completeCallback={() => null}
      />
    );

  render() {
    if (!this.props.sessionExists) {
      return (
        <div className="todo-list">
          <div className="todo-list-add-label">Please create a session</div>
          <div className="todo-list-add" title="Add new session">
            <i
              className="fas fa-plus"
              onClick={this.props.addSessionCallback}
            />
          </div>
        </div>
      );
    }

    const items = this.renderItems();
    return (
      <div className="todo-list">
        <div className="todo-list-add-label">Add a task</div>
        <div className="todo-list-add" title="Add new task">
          <i className="fas fa-plus" onClick={this.toggleAdd} />
        </div>
        {this.renderAddItem()}
        <div className="todo-list-content">
          <TodoFilter
            onApply={(filter: TodoListState["filter"]) =>
              this.setState({ filter })
            }
          />
          {items.length
            ? items
            : "No tasks to display. Please create a task or adjust the task filter!"}
        </div>
      </div>
    );
  }
}

export default connect(
  ({ items, session }: TodoState) =>
    ({
      items,
      sessionExists: !!session.sessionId
    } as TodoListReduxProps),
  { editItem, deleteItem, addItem } as TodoListActions
)(TodoList);
