import "./HomePage.css";
import AllFacultiesTab from "../../components/AllFacultiesTab/AllFacultiesTab";
import AllStudentsTab from "../../components/AllStudentsTab/AllStudentsTab";
import AllUserTab from "../../components/AllUserTab";
import { useState } from "react";

const HomePage = () => {
  const [tab, setTab] = useState("userTab");

  return (
    <div className="main-div">
      <div className="buttons__div">
        <div className="buttons__div_left">
          <button onClick={() => setTab("userTab")}>All</button>
          <button onClick={() => setTab("studentTab")}>Students</button>
          <button onClick={() => setTab("facultyTab")}>Faculties</button>
          <button>Admin</button>
        </div>
        <div>
          <button>Add Students</button>
          <button>Add Faculties</button>
        </div>
      </div>

      {tab === "userTab" && <AllUserTab />}
      {tab === "studentTab" && <AllStudentsTab />}
      {tab === "facultyTab" && <AllFacultiesTab />}

      {/* <Students /> */}
    </div>
  );
};

export default HomePage;
