import React, { Component } from "react";
import { connect } from "react-redux";

import { TodoState } from "../../../reducers/types";
import { TodoListState, TodoListProps } from "./types";
import TodoItem from "../TodoItem/TodoItem";
import {
  editItem,
  completeItem,
  deleteItem,
  addItem
} from "../../../actions/items";
import "./TodoList.css";
import { TodoItemPriorityEnum } from "../TodoItem/types";
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

  onDeleteItem = (id: string) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      this.props.deleteItem(id);
    }
  };

  renderItems() {
    return Object.values(this.props.items)
      .filter(this.state.filter)
      .sort((itemA, itemB) =>
        itemB.isCompleted ? -1 : itemB.priority - itemA.priority
      )
      .map(item => (
        <TodoItem
          priority={item.priority}
          text={item.text}
          key={item.id}
          id={item.id}
          isCompleted={item.isCompleted}
          editCallback={this.props.editItem}
          completeCallback={this.props.completeItem}
          deleteCallback={this.onDeleteItem}
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
  ({ items, session }: TodoState) => ({
    items,
    sessionExists: !!session.sessionId
  }),
  { editItem, deleteItem, completeItem, addItem }
)(TodoList);
