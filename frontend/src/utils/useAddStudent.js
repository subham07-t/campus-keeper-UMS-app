import { useState } from "react";

export const useAddStudent = () => {
  const [studentName, setStudentName] = useState("");
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

  const inputFields = [
    {
      id: 1,
      value: studentName,
      setValue: setStudentName,
      label: "First Name",
      style: {
        width: "30%",
      },
    },
    {
      id: 2,
      value: department,
      setValue: setDepartment,
      label: "Last Name",
      style: {
        width: "30%",
      },
    },
    {
      id: 3,
      value: batch,
      setValue: setBaatch,
      label: "email",
      style: {
        width: "30%",
      },
      type: "number",
    },
    {
      id: 4,
      value: number,
      setValue: setNumber,
      label: "Password",
      style: {
        width: "30%",
      },
      type: "number",
    },
    {
      id: 5,
      value: roll,
      setValue: setRoll,
      label: "Role",
      style: {
        width: "30%",
      },
      type: "number",
    },
  ];

  const addStudent = () => {
    const student = {
      name: studentName,
      department: department,
      batch: batch,
      number: number,
      roll: roll,
    };
    console.log(student);
    setModal(true);
    // perform your add student logic here
  };

  return {
    inputFields,
    addStudent,
  };
};
