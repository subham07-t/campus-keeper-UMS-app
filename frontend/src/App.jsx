import "./App.css";
import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RouteError from "./components/RouteError";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile/Profile";
import Students from "./pages/Students/Students";
import Faculties from "./pages/Faculties/Faculties";

const App = () => {
  return (
    <div>
      <Login />
      {/* <Header /> */}
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
    // children: [
    //   {
    //     path: "/dashboard",
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "/profile",
    //     element: <Profile />,
    //   },
    //   {
    //     path: "/addStudents",
    //     element: <Students />,
    //   },
    //   {
    //     path: "/addFaculties",
    //     element: <Faculties />,
    //   },
    // ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/addStudents",
    element: <Students />,
  },
]);

export default App;

// children: [
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     path: "/addStudents",
//     element: <Students />,
//   },
//   {
//     path: "/addFaculties",
//     element: <Faculties />,
//   },
// ],
