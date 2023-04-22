
import React from "react";
import Login from "./pages/Login";
import "./App.css";

const App = () => {
  const[user, setUser] = useState(false);
  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
