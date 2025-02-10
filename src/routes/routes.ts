import { createBrowserRouter } from "react-router";
import BaseLayout from "@/components/layouts/BaseLayout";
import ComponentShowcase from "@/pages/component-showcase";
import Example from "@/pages/exmple";

let router = createBrowserRouter([
  {
    path: "/",
    Component: BaseLayout,
    children: [
      {
        path: "components",
        Component: ComponentShowcase,
      },
      {
        path: "Example",
        Component: Example,
      },
    ],
  },
]);

export default router;
