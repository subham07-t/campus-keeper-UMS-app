import React,{useState} from "react";
import Login from "./components/Login";

const App = () => {
  const[user, setUser] = useState(false);
  return (
    <div>
      <h1>Welcome to Campus Keeper UMS App</h1>
      <Login />
    </div>
  );
};

export default App;
