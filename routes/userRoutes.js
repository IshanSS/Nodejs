const express = require("express");
// const { route } = require("./contatRoutes");

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "Register the user" });
});

router.post("/login", (req, res) => {
  res.json({ message: "The user can log in" });
});

router.post("/current", (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = router;
