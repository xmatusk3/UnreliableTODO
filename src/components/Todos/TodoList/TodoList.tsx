import React, { Component } from "react";
import { connect } from "react-redux";

import { TodoState } from "../../../reducers/types";
import {
  TodoListState,
  TodoListProps,
  TodoListReduxProps,
  TodoListActions
} from "./types";
import TodoItem from "../TodoItem/TodoItem";
import { editItem, deleteItem, addItem } from "../../../actions/items";
import "./TodoList.css";
import {
  TodoItemPriorityEnum,
  TodoItem as TodoItemInterface
} from "../TodoItem/types";
import TodoFilter from "../TodoFilter/TodoFilter";

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
        <TodoItem
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
      <TodoItem
        item={{
          urgency: TodoItemPriorityEnum.Medium,
          created: new Date(),
          id: "",
          text: "",
          isCompleted: false,
          updated: new Date()
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
          {items.length ? items : "No tasks created. Please create one!"}
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
