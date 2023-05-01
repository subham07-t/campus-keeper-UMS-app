const router = require("express").Router();
import {
  createRoleDetail,
  deleteUser,
  updateRoleDetail,
  deleteRoleDetail,
  getAllUsers,
} from "../controllers/userController.js";

router.route("/").get(getAllUsers);
router.route("/:role/:id").put(createRoleDetail);
router.route("/:id").delete(deleteUser);
router.route("/:role/:id").patch(updateRoleDetail).delete(deleteRoleDetail);
module.exports = router;
