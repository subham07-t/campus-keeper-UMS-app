import User from "../models/User.js";
import Auth from "../models/Auth.js";
import Student from "../models/Student.js";
import Faculty from "../models/Faculty.js";
import Admin from "../models/Admin.js";

const deleteRelatedData = async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    const authDetail = await Auth.findOne(user.authDetails).exec();

    let roleDetail;
    switch (user.role) {
      case "student":
        roleDetail = await Student.findOne(user.roleDetails).exec();
        break;
      case "faculty":
        roleDetail = await Faculty.findOne(user.roleDetails).exec();
        break;
      case "admin":
        roleDetail = await Admin.findOne(user.roleDetails).exec();
        break;
      default:
        return res.status(400).json({ message: "Invalid role" });
    }

    // Delete Auth Detail
    if (authDetail) {
      await authDetail.deleteOne();
    }

    // Delete Role Detail
    if (roleDetail) {
      await roleDetail.deleteOne();
    }

    next();
  }
};

const userMiddleware = {
  deleteRelatedData,
};
export default userMiddleware;
