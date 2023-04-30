import "./App.css";
import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RouteError from "./components/RouteError";
import Profile from "./pages/Profile/Profile";
import Students from "./pages/Students/Students";
import Faculties from "./pages/Faculties/Faculties";

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "addStudents",
        element: <Students />,
      },
      {
        path: "addFaculties",
        element: <Faculties />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default App;
