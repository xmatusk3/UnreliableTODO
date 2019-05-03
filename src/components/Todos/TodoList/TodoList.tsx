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
import { editSession } from "../../../actions/session";
import TodoFilter from "../TodoFilter/TodoFilter";
import {
  TodoItem as TodoItemInterface,
  TodoItemPriorityEnum
} from "../../../actions/items/types";
import TodoItemContainer from "../TodoItemContainer/TodoItemContainer";
import DropDownList from "../../common/DropDownList/DropDownList";
import ItemActions from "../ItemActions/ItemActions";
import "./TodoList.css";

class TodoList extends Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
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

  onDeleteSession = () => {
    if (window.confirm("Are you sure you want to delete current session?")) {
      this.props.editSession(undefined);
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

  renderChangeSession = () => (
    <div className="todo-change-session">
      Session:
      <DropDownList
        valueTextMap={{ val: "session" }}
        onChange={() => {}}
        defaultValue={"val"}
      />
      <ItemActions
        addCallback={this.props.onEditCallback}
        editCallback={this.props.onEditCallback}
        deleteCallback={this.onDeleteSession}
        addTitle="Add session"
        editTitle="Edit session"
        deleteTitle="Delete session"
      />
    </div>
  );

  render() {
    if (!this.props.sessionExists) {
      return (
        <div className="todo-list">
          <div className="todo-list-add-label">Please create a session</div>
          <div className="todo-list-add" title="Add new session">
            <i className="fas fa-plus" onClick={this.props.onEditCallback} />
          </div>
        </div>
      );
    }

    const items = this.renderItems();
    return (
      <div className="todo-list">
        {this.renderChangeSession()}
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
  { editItem, deleteItem, addItem, editSession } as TodoListActions
)(TodoList);
