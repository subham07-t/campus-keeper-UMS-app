import "./Faculties.css";
import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useAddStudent } from "../../hooks/useAddStudent";

const Faculties = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { inputFields, addStudent, modal } = useAddStudent();

  return (
    <div className="student__main-div">
      <h1 className="create__student-h1">Add Faculty</h1>

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
        <Button variant="contained" color="success">
          SUBMIT
        </Button>
        <p style={{ marginTop: "10px", color: "red" }}>
          {modal ? "User Already Exits!" : ""}
        </p>
      </div>
    </div>
  );
};

export default Faculties;
