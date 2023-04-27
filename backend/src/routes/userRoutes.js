const router = require("express").Router();
const userController = require("../controllers/UserController");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createNewUser);
router
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;
