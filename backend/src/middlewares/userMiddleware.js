import User from "../models/User.js";
import Auth from "../models/Auth.js";

const deleteRelatedData = async (req, res, next) => {
  // Delete Auth Detail
  const userId = req.params.id;
  console.log(userId);
  const authDetail = await Auth.findOne({ user: userId }).exec();
  if (authDetail) {
    await authDetail.deleteOne();
  }

  // Delete Role Detail
  const user = await User.findById(userId).populate("roleDetails").exec();
  if (user.roleDetails) {
    await user.roleDetails.deleteOne();
  }
};

const userMiddleware = {
  deleteRelatedData,
};
export default userMiddleware;
