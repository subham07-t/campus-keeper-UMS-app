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

router.route("/roles/:role").get(userController.getAllDetail);
router
  .route("/:role/:id")
  .get(userController.getDetail)
  .put(userController.addRoleDetail)
  .patch(userController.updateRoleDetail);

export default router;
