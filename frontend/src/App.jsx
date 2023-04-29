import "./App.css";
import React from "react";
import Login from "./pages/Login";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

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
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default App;
