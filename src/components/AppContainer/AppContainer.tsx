import React, { useState } from "react";

import TodoList from "../Todos/TodoList/TodoList";
import "./AppContainer.css";
import EditSession from "../EditSession/EditSession";
import Message from "./Message/Message";
import Header from "./Header/Header";

const AppContainer: React.FC = () => {
  const [isEditMode, setEditMode] = useState(false);
  const [isAdding, setAdding] = useState(true);

  const renderContent = () =>
    isEditMode ? (
      <EditSession
        cancelCallback={() => setEditMode(false)}
        isAdding={isAdding}
      />
    ) : (
      <TodoList
        onEditCallback={() => {
          setEditMode(true);
          setAdding(false);
        }}
        onAddingCallback={() => {
          setEditMode(true);
          setAdding(true);
        }}
        onDeleteLastSessionCallback={() => setAdding(true)}
      />
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
