const express = require("express");
const router = express.Router();
const passport = require("passport");

// cine1 project page route
router.get('/projects/cine-1', (reg, res) => {
    res.render('projects/cine-1/cine-1');
});

module.exports = router;
