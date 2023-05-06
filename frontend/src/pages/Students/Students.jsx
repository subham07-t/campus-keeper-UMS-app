import "./Students.css";
import React from "react";
import Button from "@mui/material/Button";
import InputField from "../../components/InputField";
import { useAddStudent } from "../../utils/useAddStudent";

const Students = () => {
  const { inputFields, addStudent } = useAddStudent();

  return (
    <div className="student__main-div">
      <h1 className="create__student-h1">Add Student</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {inputFields?.map((inputs) => {
          const { id, style, label, value, setValue, type } = inputs;
          return (
            <InputField
              key={id}
              style={style}
              label={label}
              value={value}
              setValue={setValue}
              type={type}
            />
          );
        })}
      </div>

      <div className="sub__div-three">
        <Button variant="contained" color="success" onClick={addStudent}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default Students;
