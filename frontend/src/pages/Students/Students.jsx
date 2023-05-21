import "./Students.css";
import React from "react";
import Button from "@mui/material/Button";

import { useAddStudent } from "../../hooks/useAddStudent";

const Students = () => {
  const { inputFields, addStudent, modal } = useAddStudent();

  return (
    <div className="student__main-div">
      <h1 className="create__student-h1">Add Student</h1>
      {/* <div className="inputFields">
        {inputFields?.map((inputs) => {
          const {
            id,
            style,
            label,
            value,
            setValue,
            type,
            errValue,
            setErrValue,
          } = inputs;
          return (
            <InputField
              key={id}
              style={style}
              label={label}
              value={value}
              setValue={setValue}
              type={type}
              errValue={errValue}
              setErrValue={setErrValue}
            />
          );
        })}
      </div> */}

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
