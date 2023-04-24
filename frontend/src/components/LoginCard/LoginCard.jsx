import "./LoginCard.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoginCard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errUserName, setErrUserName] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const navigateToDashboard = async () => {
    if (userName === "") {
      setErrUserName("Please Enter Your Email...");
      return;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userName)) {
      setErrUserName("Please Enter Valid Email...");
      return;
    }
    setErrUserName("");

    if (password === "") {
      setErrPassword("Please Enter Your Password...");
      return;
    } else if (password < 3) {
      setErrPassword("Password Must Be Greater Than 3 Characters...");
      return;
    }
    setErrPassword("");

    const userCredentials = {
      email: userName,
      password: password,
    };

    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    const result = await response.json();

    if (result.msg === "success") {
      localStorage.setItem("user-info", JSON.stringify(result.username));
      navigate("./dashboard");
    }
  };

  return (
    <div className="login__card">
      <div className="login_card_content">
        <h1 className="login__heading">Login</h1>
        <div className="input__div">
          <input
            className="input__field"
            placeholder="Username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setErrUserName("");
            }}
          />
          {errUserName ? <p className="error_msg">{errUserName}</p> : null}
          <input
            className="input__field"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrPassword("");
            }}
          />
          {errPassword ? <p className="error_msg">{errPassword}</p> : null}
          <p className="forgot__pass-text">Forgot Password?</p>
          <button className="login__btn" onClick={navigateToDashboard}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
