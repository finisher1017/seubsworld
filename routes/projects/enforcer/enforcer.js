const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get('/projects/enforcer', (req, res) => {
    res.render('projects/enforcer/enforcer');
});

module.exports = router;