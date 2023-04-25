import React from 'react'
import "./Header.css"
import { FaSearch} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import { IoAppsSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import companyLogo from "../../assets/userLogo.png";







const Header = () => {
  return (
    <div>
        <div className='header_section'>
          <div className="header_container">
            <div className="header_items_wrapper">

              <div className="header_items one">
                  <a href="#" className='logo'>UMS</a>
              </div>

              <div className="header_items two">
                  <div className='input_wrapper'>
                    <input type="text" className='search_input' placeholder='Search' />
                    <span className='search_icon'>
                        <FaSearch />
                    </span>
                  </div>
              </div>

              <div className="header_items three">
                  <div className='header_other_wrapper'>

                    <div className='header_btn_div'>
                        <a href="#"> <FaPlus className='add_icons_color'/> Create New Project</a>
                    </div>

                    <div className='icons_group_div'>
                      <div className='icons_wrappers'>
                        <a href="#"><IoAppsSharp className='other_icons'/></a>
                        <a href="#"><FaEnvelope className='other_icons'/></a>
                        <a href="#"><IoNotifications className='other_icons'/></a>
                      </div>
                    </div>

                    <div className='header_username_div'>
                        <div className='hud_user_info'>
                          <div className='hud_user_logo'>
                            <img src={companyLogo} alt="" />
                          </div>
                          <p className='hud_user_name'>Mukhtadul</p>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}
export default Header;

