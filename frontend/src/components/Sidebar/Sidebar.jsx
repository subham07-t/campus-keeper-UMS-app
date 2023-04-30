import "./Sidebar.css";
import { Link } from "react-router-dom";
import { sidebarData } from "../../utils/constants";

//Design this sidebar according to template provided...

const Sidebar = () => {
  return (
    <div className="sidebar__div">
      <h1 className="h1">Sidebar</h1>
      <ul>
        {sidebarData.map((data) => {
          return (
            <Link to={data.url} key={data.id}>
              <li>{data.component}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
