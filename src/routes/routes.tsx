import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
import Sidebard from "@/components/layouts/Sidebard";
import ErrorPage from "@/pages/error-page";
import ComponentShowcase from "@/pages/component-showcase";
import Dashboard from "@/pages/dashboard";
import Deals from "@/pages/deals";
import Costumers from "@/pages/costumers";
import Tasks from "@/pages/tasks";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Sidebard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/components" replace />,
      },
      {
        path: "components",
        element: <ComponentShowcase />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "deals",
        element: <Deals />,
      },
      { path: "costumers", element: <Costumers /> },
      { path: "tasks", element: <Tasks /> },
    ],
  },
  // create route for redirect to /components
];

const router = createBrowserRouter(routes);

export default router;
