import React, { useState } from "react";

import TodoList from "../Todos/TodoList/TodoList";
import "./AppContainer.css";
import Header from "./Header/Header";

const AppContainer: React.FC = () => {
  const [isEditMode, setEditMode] = useState(false);

  const renderContent = () => isEditMode || <TodoList />;

  return (
    <div className="app-container">
      <Header onEditClick={() => setEditMode(true)} />
      {renderContent()}
    </div>
  );
};

export default AppContainer;
