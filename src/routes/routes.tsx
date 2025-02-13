import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
import Sidebard from "@/components/layouts/Sidebard";
import ErrorPage from "@/pages/error-page";
import ComponentShowcase from "@/pages/component-showcase";
import Dashboard from "@/pages/dashboard";

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
      }
    ],
  },
  // create route for redirect to /components

];

const router = createBrowserRouter(routes);

export default router;
