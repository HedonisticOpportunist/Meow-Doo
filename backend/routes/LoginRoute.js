const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  deleteUser,
} = require("../controllers/userController");

// LOGIN A USER
router.post("/login", loginUser);

// REGISTER A USER
router.post("/signup", registerUser);

// DELETE A USER
router.delete("/:email", deleteUser);

module.exports = router;
