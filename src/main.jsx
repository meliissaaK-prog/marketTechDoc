
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./router.js";
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
