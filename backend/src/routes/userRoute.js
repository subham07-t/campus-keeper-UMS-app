const router = require("express").Router();
const usersController = require("../controllers/usersController");

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser);
router
  .route("/:id")
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);
module.exports = router;
