// import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const Profile = () => {
  // const [first, setfirst] = useState("");
  const test = async () => {
    const res = await fetch("https://campus-keeper-server.vercel.app", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const url = res.url;
    window.location.replace(url);
    // <Navigate to={url} />;
  };
  return (
    <div className="student__main-div">
      <h1>Admin Profile</h1>
      {/* <p>{first}</p> */}
      <button onClick={test}>test</button>
    </div>
  );
};

export default Profile;
