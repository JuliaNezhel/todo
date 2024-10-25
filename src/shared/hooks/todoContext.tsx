import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Todo } from "./todo.type";
import ky from "ky";

type TodoContextType = {
  todos: Todo[];
  loading: boolean;
};

type TodoActionsContextType = {
  fetchTodos: () => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);
export const TodoActionsContext = createContext<TodoActionsContextType | null>(
  null,
);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    const todos = await ky<Todo[]>(
      "GetTasks",  {prefixUrl: 'http://localhost:8089/api/ToDoList'}
    ).json();
    console.log(todos);
    setTodos((state) => [...state, ...todos]);
    setLoading(false);
  }, []);

  const value = useMemo(
    () => ({
      todos,
      loading,
    }),
    [todos, loading],
  );

  const valueActions = useMemo(
    () => ({
      fetchTodos,
    }),
    [fetchTodos],
  );

  return (
    <TodoContext.Provider value={value}>
      <TodoActionsContext.Provider value={valueActions}>
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};
