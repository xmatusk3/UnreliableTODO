import React, { useState } from "react";

import TodoList from "../Todos/TodoList/TodoList";
import "./AppContainer.css";
import Header from "./Header/Header";
import EditSession from "../EditSession/EditSession";

const AppContainer: React.FC = () => {
  const [isEditMode, setEditMode] = useState(false);

  const renderContent = () =>
    isEditMode ? (
      <EditSession cancelCallback={() => setEditMode(false)} />
    ) : (
      <TodoList />
    );

  return (
    <div className="app-container">
      <Header
        onEditClick={() => setEditMode(true)}
        onDeleteClick={() => setEditMode(false)}
      />
      {renderContent()}
    </div>
  );
};

export default AppContainer;
