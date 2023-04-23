import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

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
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default App;
