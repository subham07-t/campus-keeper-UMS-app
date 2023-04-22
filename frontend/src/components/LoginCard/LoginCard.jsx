import "./LoginCard.css";

const LoginCard = () => {
  return (
    <div className="login__card">
      <h1 className="login__heading">Signup</h1>
      <div className="input__div">
        <input className="input__field" placeholder="Username" />
        <input className="input__field" placeholder="Password" />
        <p className="forgot__pass-text">Forgot Password?</p>
        <button className="login__btn">Login</button>
      </div>
    </div>
  );
};

export default LoginCard;
