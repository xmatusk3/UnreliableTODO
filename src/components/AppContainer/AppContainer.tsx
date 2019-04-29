import React, { useState } from "react";

import TodoList from "../Todos/TodoList/TodoList";
import "./AppContainer.css";
import Header from "./Header/Header";
import EditSession from "../EditSession/EditSession";
import Message from "./Message/Message";

const AppContainer: React.FC = () => {
  const [isEditMode, setEditMode] = useState(false);

  const renderContent = () =>
    isEditMode ? (
      <EditSession cancelCallback={() => setEditMode(false)} />
    ) : (
      <TodoList addSessionCallback={() => setEditMode(true)} />
    );

  return (
    <div className="app-container">
      <Header
        onEditClick={() => setEditMode(true)}
        onDeleteClick={() => setEditMode(false)}
      />
      <Message />
      {renderContent()}
    </div>
  );
};

export default AppContainer;
