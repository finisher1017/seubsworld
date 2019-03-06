const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get('/projects/lighting-test', (req, res) => {
    res.render('projects/lighting-test/lighting-test');
})

module.exports = router;