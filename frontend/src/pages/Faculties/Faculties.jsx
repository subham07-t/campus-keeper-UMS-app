import "./Faculties.css";
import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const Faculties = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="student__main-div">
      <h1 className="create__student-h1">Add Faculties</h1>
      <div className="sub__div-one">
        <TextField id="filled-basic" label="Full Name" variant="filled" />
        <TextField id="filled-basic" label="Department" variant="filled" />
        <TextField id="filled-basic" label="Date of Joinning" variant="filled" />
      </div>
      <div className="sub__div-one">
        <TextField
          id="filled-basic"
          label="ID Number"
          variant="filled"
          type="number"
        />
        <TextField
          id="filled-basic"
          label="Previous Organization"
          variant="filled"
          
        />
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
      <div className="sub__div-one">
      <TextField
          id="filled-basic"
          label="Phone Number"
          variant="filled"
          type="number"
        />
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          type="email"
        />
        <TextField id="filled-basic" label="Password" variant="filled" />
     
      </div>
      <div className="sub__div-two">
        <TextField
          id="filled-multiline-static"
          label="Address"
          multiline
          rows={2}
          variant="filled"
        />
        <TextField
          id="filled-basic"
          label="Upload Photo"
          variant="filled"
          type="file"
        />
      </div>
      <div className="sub__div-three">
        <Button variant="contained" color="success">
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default Faculties;
