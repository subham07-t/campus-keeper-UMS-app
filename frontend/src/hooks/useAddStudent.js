import { useState } from "react";

export const useAddStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const [errFirstName, setErrFirstName] = useState("");
  const [errLastName, setErrLastName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [modal, setModal] = useState(false);

  const inputFields = [
    {
      id: 1,
      value: firstName,
      setValue: setFirstName,
      label: "First Name",
      style: {
        width: "40%",
      },
      errValue: errFirstName,
      setErrValue: setErrFirstName,
    },
    {
      id: 2,
      value: lastName,
      setValue: setLastName,
      label: "Last Name",
      style: {
        width: "40%",
      },
      errValue: errLastName,
      setErrValue: setErrLastName,
    },
    {
      id: 3,
      value: email,
      setValue: setEmail,
      label: "Email",
      style: {
        width: "40%",
      },
      type: "email",
      errValue: errEmail,
      setErrValue: setErrEmail,
    },
    {
      id: 4,
      value: password,
      setValue: setPassword,
      label: "Password",
      style: {
        width: "40%",
      },
      type: "password",
      errValue: errPassword,
      setErrValue: setErrPassword,
    },
  ];

  const addStudent = async () => {
    if (firstName === "") {
      setErrFirstName("Required");
      return;
    }
    if (lastName === "") {
      setErrLastName("Required");
      return;
    }
    if (email === "") {
      setErrEmail("Required");
      return;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setErrEmail("Invalid Email");
      return;
    }
    if (password === "") {
      setErrPassword("Required");
      return;
    }

    const student = {
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email: email.toLowerCase(),
      password: password.toLowerCase(),
      role: role,
    };

    const response = await fetch(
      `${import.meta.env.VITE_PRODUCTION_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      }
    );

    if (response.status === 409) {
      setModal(true);
      return;
    }
    // const result = await response.json();
  };

  return {
    inputFields,
    addStudent,
    modal,
  };
};
