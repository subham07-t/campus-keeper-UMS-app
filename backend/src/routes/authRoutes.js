const authController = require('../controllers/authController')

const router = require("express").Router();

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

module.exports = router;
