import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
  // updated with main:2"
);
