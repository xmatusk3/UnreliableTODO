import React from "react";

import TodoItem from "./TodoItem/TodoItem";
import { TodoItemPriorityEnum } from "./TodoItem/types";

const App: React.FC = () => {
  return (
    <div>
      <TodoItem priority={TodoItemPriorityEnum.Highest} text={"TODO1!"} />
      <TodoItem priority={TodoItemPriorityEnum.Higher} text={"TODO2!"} />
      <TodoItem priority={TodoItemPriorityEnum.Medium} text={"TODO3!"} />
      <TodoItem priority={TodoItemPriorityEnum.Lower} text={"TODO4!"} />
      <TodoItem priority={TodoItemPriorityEnum.Lowest} text={"TODO5!"} />
    </div>
  );
};

export default App;
