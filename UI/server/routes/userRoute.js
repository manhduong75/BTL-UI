const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/user", userController.fetchUser);
router.post("/createUser", userController.createUser);

module.exports = router;
