import React from "react";

import TodoList from "../Todos/TodoList/TodoList";
import "./AppContainer.css";

const AppContainer: React.FC = () => {
  return (
    <div className="app-container">
      <TodoList />
    </div>
  );
};

export default AppContainer;
