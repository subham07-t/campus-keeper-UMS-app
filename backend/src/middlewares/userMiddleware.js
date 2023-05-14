import User from "../models/User.js";
import Auth from "../models/Auth.js";
import getModelByRole from "../util/model.js";

const deleteRelatedData = async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    const authDetail = await Auth.findOne(user.authDetails).exec();

    const userModel = getModelByRole(user.role);
    let roleDetail = await userModel.findOne(user.roleDetails).exec();

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
