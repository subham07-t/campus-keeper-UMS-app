import Student from "../models/Student.js";
import Faculty from "../models/Faculty.js";
import Admin from "../models/Admin.js";

const getModelByRole = (role) => {
  switch (role) {
    case "student":
      return Student;
    case "faculty":
      return Faculty;
    case "admin":
      return Admin;
    default:
      throw new Error("Invalid role");
  }
};

export default getModelByRole;
