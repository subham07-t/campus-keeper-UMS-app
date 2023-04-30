const router = require("express").Router();

router.route("/").get((req, res) => {
  res.json("connected tested");
});

module.exports = router;
