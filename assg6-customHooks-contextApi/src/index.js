import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Route components
import App from "./routes/app.js";
import ErrorElement from "./routes/AppLayout/ErrorElement";
import AppLayout from "./routes/AppLayout/AppLayout.js";
import UsersPage from "./routes/UsersPage.js";
//class components
const AboutUs = lazy(() => import("./routes/ClassComponents/AboutUs.js"));

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
      {
        path: "/about-us",
        element: (
          <Suspense fallback="Loading...">
            <AboutUs />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
