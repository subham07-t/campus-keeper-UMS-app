import "./Body.css";
import { useNavigate } from "react-router";
import { Outlet } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  const navigateToAddStudent = () => navigate("addStudents");
  const navigateToAddFaculty = () => navigate("addFaculties");
  const navigateToUsers = () => navigate("users");

  return (
    <div className="main-div">
      <div className="buttons__div">
        <div className="buttons__div_left">
          <button onClick={navigateToUsers}>All</button>
          <button>Students</button>
          <button>Faculties</button>
          <button>Admin</button>
        </div>
        <div>
          <button onClick={navigateToAddStudent}>Add Students</button>
          <button onClick={navigateToAddFaculty}>Add Faculties</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
