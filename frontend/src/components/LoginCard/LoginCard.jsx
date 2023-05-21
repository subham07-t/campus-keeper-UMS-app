import "./LoginCard.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoginCard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errUserName, setErrUserName] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCredentials, setErrCredentials] = useState("");

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
    const response = await fetch(
      `${import.meta.env.VITE_PRODUCTION_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      }
    );
    const result = await response.json();
    if (result === "Wrong Credentials") {
      setErrCredentials("Wrong Credentials");
    }
    if (result.msg === "success, This admin07@mail.com has been logged in") {
      localStorage.setItem("user-info", JSON.stringify(result.username));
      // navigate("./dashboard/home");
    }
    navigate("./dashboard/home");
  };

  console.log(userName);
  console.log(password);

  return (
    <div className="login__card">
      <div className="input__div">
        <div className="headText_div">
          <div style={{ width: "70%" }}>
            <h1 style={{ textAlign: "center" }}>Welcome Back!</h1>
            <p style={{ textAlign: "center", fontSize: "12px" }}>
              Please enter your credentials to access your account.
            </p>
          </div>
        </div>

        <div className="username_div">
          <div className="inputdiv_sub1">
            <label htmlFor="" className="login_label">
              Username
            </label>
            <input
              type="text"
              className="input__field"
              onChange={(e) => {
                setUserName(e.target.value);
                setErrUserName("");
              }}
            />

            {errUserName ? <p className="error_msg">{errUserName}</p> : null}
          </div>
        </div>
        <div className="username_div">
          <div className="inputdiv_sub1">
            <label htmlFor="" className="login_label">
              Password
            </label>
            <input
              type="password"
              className="input__field"
              onChange={(e) => {
                setPassword(e.target.value);
                setErrPassword("");
              }}
            />

            {errPassword ? <p className="error_msg">{errPassword}</p> : null}
          </div>
        </div>
        <div className="inputdiv_sub2">
          <p className="forgot__pass-text">Forgot Password?</p>
        </div>
        <div className="username_div">
          <button className="login__btn" onClick={navigateToDashboard}>
            Login
          </button>

          {errCredentials ? (
            <p className="error_msg">{errCredentials}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
