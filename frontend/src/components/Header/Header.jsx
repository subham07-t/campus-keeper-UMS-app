import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoAppsSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import userLogo from "../../assets/facebook.jpg";
import { IoNotificationsOutline } from "react-icons/io5";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <div className="header_main">
      <div style={{ width: "40%" }}>
        <input type="text" className="search" placeholder="Search Here" />
      </div>
      <div className="header_right">
        <div style={{ position: "relative" }}>
          <IoNotificationsOutline className="other_icons" size={20} />
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            src={userLogo}
            sx={{ width: 30, height: 30, cursor: "pointer" }}
          />
        </div>
        <div>
          <p>Subham</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
