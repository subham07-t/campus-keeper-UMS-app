import React from "react";
import "./Login.css";
import WelcomeCard from "../../components/WelcomeCard";
import LoginCard from "../../components/LoginCard";

const Login = () => {
  return (
    <div className="main__div">
      <div className="container">
      <WelcomeCard />
      <LoginCard />
      </div>
    </div>
  );
};

export default Login;
