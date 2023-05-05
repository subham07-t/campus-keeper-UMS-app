import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";

//Added comments

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
  // All updated with main
);
