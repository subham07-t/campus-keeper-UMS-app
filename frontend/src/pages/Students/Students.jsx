import "./Students.css";
import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Students = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="student__main-div">
      <h1 className="create__student-h1">Add Student</h1>
      <div className="sub__div-one">
        <TextField id="filled-basic" label="Full Name" variant="filled" />
        <TextField id="filled-basic" label="Department" variant="filled" />
        <TextField id="filled-basic" label="Batch" variant="filled" />
      </div>
      <div className="sub__div-one">
        <TextField
          id="filled-basic"
          label="Phone Number"
          variant="filled"
          type="number"
        />
        <TextField
          id="filled-basic"
          label="Roll Number"
          variant="filled"
          type="number"
        />
        <TextField
          id="filled-basic"
          label="Registration Number"
          variant="filled"
          type="number"
        />
      </div>
      <div className="sub__div-one">
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          type="email"
        />
        <TextField id="filled-basic" label="Password" variant="filled" />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Gender"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="sub__div-two">
        <TextField
          id="filled-multiline-static"
          label="Address"
          multiline
          rows={4}
          defaultValue="Default Value111"
          variant="filled"
        />
      </div>
    </div>
  );
};

export default Students;
