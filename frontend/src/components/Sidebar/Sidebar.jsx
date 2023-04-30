import "./Sidebar.css";
import { Link } from "react-router-dom";
import { sidebarData } from "../../utils/constants";

//Design this sidebar according to template provided...
// Tesing for this branch

const Sidebar = () => {
  return (
    <div className="sidebar__div">
      {/* <h1 className="h1">Sidebar</h1> */}
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
