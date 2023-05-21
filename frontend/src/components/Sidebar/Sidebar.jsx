import "./Sidebar.css";
import { Link } from "react-router-dom";
import { sidebarData } from "../../utils/constants";

const Sidebar = () => {
  return (
    <div className="sidebar__div">
      <div className="headText_div">
        <h1 className="sidebar_heading">UMS</h1>
      </div>
      <ul className="sidebar_menulist_wrapper">
        {sidebarData.map((data) => {
          return (
            <Link to={data.url} key={data.id} className="sidebar_menu_links">
              <li className="sidebar_ml">{data.component}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
