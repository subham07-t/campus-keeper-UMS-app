import "./WelcomeCard.css";
import Dashboard from "../../assets/dash.png";

const WelcomeCard = () => {
  return (
    <div className="welcome__div">
      <div>
        <h3 className="head">UMS Application</h3>
        <p className="para">The simplest way to manage your workforce</p>
        <div className="img_div">
          <img src={Dashboard} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
