import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/app.js";
import ErrorElement from "./routes/ErrorElement.js";
import AppLayout from "./routes/AppLayout.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./routes/UsersPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "users",
        element: <App />,
      },
      {
        path: "users/:userId",
        element: <UsersPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
