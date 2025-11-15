
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./router.js";
import './index.css'


ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
