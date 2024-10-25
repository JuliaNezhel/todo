import { useContext } from "react";
import { TodoContext } from "./todoContext";

export const useTodo = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) throw new Error("нет контекста");
  return todoContext;
};
