const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get('/projects/enforcer-biz', (req, res) => {
    res.render('projects/enforcer-biz/enforcer-biz');
});

module.exports = router;