import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();
router.route("/").get(userController.getAllUsers);
router.route("/:role/:id").put(userController.createRoleDetail);
router.route("/:id").delete(userController.deleteUser);
router
  .route("/:role/:id")
  .patch(userController.updateRoleDetail)
  .delete(userController.deleteRoleDetail);

export default router;
