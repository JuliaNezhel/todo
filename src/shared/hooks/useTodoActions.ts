import { useContext } from "react";
import { TodoActionsContext } from "./todoContext";

export const useTodoActions = () => {
  const todoContext = useContext(TodoActionsContext);

  if (!todoContext) throw new Error("нет контекста action");
  return todoContext;
};
