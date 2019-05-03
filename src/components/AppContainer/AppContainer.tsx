import React, { useState } from "react";

import TodoList from "../Todos/TodoList/TodoList";
import "./AppContainer.css";
import EditSession from "../EditSession/EditSession";
import Message from "./Message/Message";
import Header from "./Header/Header";

const AppContainer: React.FC = () => {
  const [isEditMode, setEditMode] = useState(false);

  const renderContent = () =>
    isEditMode ? (
      <EditSession cancelCallback={() => setEditMode(false)} />
    ) : (
      <TodoList onEditCallback={() => setEditMode(true)} />
    );

  return (
    <div className="app-container">
      <Header />
      <Message />
      {renderContent()}
    </div>
  );
};

export default AppContainer;
