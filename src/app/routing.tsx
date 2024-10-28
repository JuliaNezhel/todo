import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import TasksPage from "@/pages/tasks/tasks";
import CategoryPage from "@/pages/category/category";
import { ROUTES } from "@/shared/enums/pathRoutes";
import { Layout } from "./Layout";

const route: RouteObject[] = [
  { element: <TasksPage />, path: ROUTES.TASKS },
  { element: <CategoryPage />, path: ROUTES.CATEGORY },
  { element: <Navigate to={ROUTES.TASKS}/> , path: "/" },
];

const router = createBrowserRouter([
  {
    children: route,
    element: <Layout />,
    errorElement: <div>Страница не найдена</div>,
    path: "/",
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
