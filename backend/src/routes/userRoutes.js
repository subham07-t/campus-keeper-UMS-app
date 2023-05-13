import express from "express";
import userController from "../controllers/userController.js";
import userMiddleware from "../middlewares/userMiddleware.js";

const router = express.Router();
router.route("/").get(userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userMiddleware.deleteRelatedData, userController.deleteUser);
router.route("/:role/:id").put(userController.addRoleDetail);
router
  .route("/:role/:id")
  .patch(userController.updateRoleDetail)
  .delete(userController.deleteRoleDetail);

export default router;
