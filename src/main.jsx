import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import NotFound from "./components/NotFound";
import Secret from "./components/Secret";
import MainLayout from "./layouts/Main";
import Home from "./routes/Home";
import { AppWrapper } from "./context";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />
      }, {
        path: "secret",
        element: <Secret />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  </React.StrictMode>
);