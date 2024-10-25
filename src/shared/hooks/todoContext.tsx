import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Category, Task } from "./todo.type";
import ky from "ky";
import { baseApi } from "../model/api/baseApi";

type TodoContextType = {
  tasks: Task[];
  loading: boolean;
  categories: Category[];
};

type TodoActionsContextType = {
  deleteTask: (id: number) => void;
  deleteCategories: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);
export const TodoActionsContext = createContext<TodoActionsContextType | null>(
  null,
);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    const tasks = await ky<Task[]>("GetTasks", {
      prefixUrl: "http://localhost:8089/api/ToDoList",
    }).json();
    console.log(tasks);
    setTasks((state) => [...state, ...tasks]);
    setLoading(false);
  }, []);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    const categories = await baseApi.get<Category[]>("GetCategories").json();
    setCategories((state) => [...state, ...categories]);
    setLoading(false);
  }, []);

  const deleteTask = useCallback(async (id: number) => {
    try {
      setLoading(true);
      await baseApi.get(`RemoveTask/${id}`);
      setTasks((state) => state.filter((t) => t.id !== id));
      setLoading(false);
    } catch (err) {
      console.log("error", err);
    }
  }, []);

  const deleteCategories = useCallback(async (id: number) => {
    try {
      setLoading(true);
      await baseApi.get(`RemoveCategory/${id}`);
      setCategories((state) => state.filter((t) => t.id !== id));
      setLoading(false);
    } catch (err) {
      console.log("error", err);
    }
  }, []);

  const value = useMemo(
    () => ({
      tasks,
      loading,
      categories,
    }),
    [tasks, loading, categories],
  );

  const valueActions = useMemo(
    () => ({
      deleteTask,
      deleteCategories
    }),
    [deleteTask, deleteCategories],
  );

  useEffect(() => {
    fetchTasks();
    fetchCategories();
  }, []);

  return (
    <TodoContext.Provider value={value}>
      <TodoActionsContext.Provider value={valueActions}>
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};
