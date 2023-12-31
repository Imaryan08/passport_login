const express = require("express");
const { ensureAuthenticated } = require("../config/auth");

const router = express.Router();
// Welcome Page
router.get("/", (req, res) => {
  res.render("welcome");
});

// Dashboard page
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    name: req.user.name,
  });
});

module.exports = router;
