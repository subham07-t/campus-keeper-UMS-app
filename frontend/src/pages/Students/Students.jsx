import "./Students.css";
import React from "react";
import Button from "@mui/material/Button";

import { useAddStudent } from "../../hooks/useAddStudent";

const Students = () => {
  const { inputFields, addStudent, modal } = useAddStudent();

  return (
    <div className="student__main-div">
      <h1 className="create__student-h1">Add Student</h1>

      <div className="input_main-div">
        <div className="username_div">
          <div className="inputdiv_sub1">
            <label htmlFor="" className="login_label">
              Firstname
            </label>
            <input
              type="text"
              className="input__field"
              // onChange={(e) => {
              //   setUserName(e.target.value);
              //   setErrUserName("");
              // }}
            />

            {/* {errUserName ? <p className="error_msg">{errUserName}</p> : null} */}
          </div>
        </div>

        <div className="username_div">
          <div className="inputdiv_sub1">
            <label htmlFor="" className="login_label">
              Lastname
            </label>
            <input
              type="text"
              className="input__field"
              // onChange={(e) => {
              //   setUserName(e.target.value);
              //   setErrUserName("");
              // }}
            />

            {/* {errUserName ? <p className="error_msg">{errUserName}</p> : null} */}
          </div>
        </div>

        <div className="username_div">
          <div className="inputdiv_sub1">
            <label htmlFor="" className="login_label">
              Email
            </label>
            <input
              type="text"
              className="input__field"
              // onChange={(e) => {
              //   setUserName(e.target.value);
              //   setErrUserName("");
              // }}
            />

            {/* {errUserName ? <p className="error_msg">{errUserName}</p> : null} */}
          </div>
        </div>

        <div className="username_div">
          <div className="inputdiv_sub1">
            <label htmlFor="" className="login_label">
              Password
            </label>
            <input
              type="text"
              className="input__field"
              // onChange={(e) => {
              //   setUserName(e.target.value);
              //   setErrUserName("");
              // }}
            />

            {/* {errUserName ? <p className="error_msg">{errUserName}</p> : null} */}
          </div>
        </div>
      </div>

      <div className="sub__div-three">
        <Button variant="contained" color="success" onClick={addStudent}>
          SUBMIT
        </Button>
        <p style={{ marginTop: "10px", color: "red" }}>
          {modal ? "User Already Exits!" : ""}
        </p>
      </div>
    </div>
  );
};

export default Students;
