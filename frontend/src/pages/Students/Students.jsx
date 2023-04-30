import "./Students.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const Students = () => {
  //Student Details States:
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [batch, setBaatch] = useState("");
  const [number, setNumber] = useState("");
  const [roll, setRoll] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [modal, setModal] = useState(false);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = () => {
    console.log("User Details....");
    const userDetails = {
      fullName: name,
      department: department,
      batch: batch,
      number: number,
      roll: roll,
      registrationNumber: registrationNumber,
      email: email,
      password: password,
      gender: gender,
      address: address,
    };

    setModal(true);

    console.log(userDetails);
  };
  return (
    <div className="student__main-div">
      <h1 className="create__student-h1">Add Student</h1>
      <div className="sub__div-one">
        <TextField
          id="filled-basic"
          label="Full Name"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Department"
          variant="filled"
          onChange={(e) => setDepartment(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Batch"
          variant="filled"
          onChange={(e) => setBaatch(e.target.value)}
        />
      </div>
      <div className="sub__div-one">
        <TextField
          id="filled-basic"
          label="Phone Number"
          variant="filled"
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Roll Number"
          variant="filled"
          type="number"
          onChange={(e) => setRoll(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Registration Number"
          variant="filled"
          type="number"
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
      </div>
      <div className="sub__div-one">
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={gender}
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
          rows={2}
          variant="filled"
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          id="filled-basic"
          // label="Email"
          variant="filled"
          type="file"
        />
      </div>
      <div className="sub__div-three">
        <Button variant="contained" color="success" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default Students;
