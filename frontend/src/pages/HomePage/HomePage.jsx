import "./HomePage.css";
import AllFacultiesTab from "../../components/AllFacultiesTab/AllFacultiesTab";
import AllStudentsTab from "../../components/AllStudentsTab/AllStudentsTab";
import AllUserTab from "../../components/AllUserTab";
import { useState } from "react";
import AllAdminTab from "../../components/AllAdminTab/AllAdminTab";
import Students from "../Students/Students";
import Faculties from "../Faculties/Faculties";

const HomePage = () => {
  const [tab, setTab] = useState("userTab");
  const [all, setAll] = useState(false);
  const [student, setStudent] = useState(false);
  const [faculty, setFaculty] = useState(false);

  return (
    <div className="main-div">
      <div className="buttons__div">
        <div className="buttons__div_left">
          <button
            onClick={() => {
              setTab("userTab");
              setAll(true);
              setStudent(false);
              setFaculty(false);
            }}
            className="buttons"
            style={{
              backgroundColor: all ? "#157afe" : "#D3D3D3",
              color: all ? "white" : "black",
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setTab("studentTab");
              setStudent(true);
              setAll(false);
              setFaculty(false);
            }}
            className="buttons_middle"
            style={{
              backgroundColor: student ? "#157afe" : "#DCDCDC",
              color: student ? "white" : "black",
            }}
          >
            Students
          </button>
          <button
            onClick={() => {
              setTab("facultyTab");
              setFaculty(true);
              setAll(false);
              setStudent(false);
            }}
            className="buttons_middle"
            style={{
              backgroundColor: faculty ? "#157afe" : "#DCDCDC",
              color: faculty ? "white" : "black",
            }}
          >
            Faculties
          </button>
          <button onClick={() => setTab("adminTab")} className="buttons_last">
            Admin
          </button>
        </div>
        <div>
          <button onClick={() => setTab("addStudent")}>Add Students</button>
          <button onClick={() => setTab("addFaculty")}>Add Faculties</button>
        </div>
      </div>

      {tab === "userTab" && <AllUserTab />}
      {tab === "studentTab" && <AllStudentsTab />}
      {tab === "facultyTab" && <AllFacultiesTab />}
      {tab === "adminTab" && <AllAdminTab />}
      {tab === "addStudent" && <Students />}
      {tab === "addFaculty" && <Faculties />}

      {/* <Students /> */}
    </div>
  );
};

export default HomePage;
