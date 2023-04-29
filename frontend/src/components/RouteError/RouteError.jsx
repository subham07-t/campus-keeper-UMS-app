import "./RouteError.css";
import { useRouteError } from "react-router-dom";

const RouteError = () => {
  const err = useRouteError();
  const { status, statusText } = err;

  return (
    <div className="route__main-div">
      <h1 className="status">{status}</h1>
      <h1 className="error">Oppss!</h1>
      <h4 className="error">{statusText}</h4>
    </div>
  );
};

export default RouteError;
