import "./App.css";
import React from "react";
import Login from "./pages/Login";
import "./App.css";
import  Header  from "./components/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      
      <Header/>
      {/* <Login /> */}
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
