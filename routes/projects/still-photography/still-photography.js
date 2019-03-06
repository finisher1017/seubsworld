const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get('/projects/still-photography', (req, res) => {
    res.render('projects/still-photography/still-photography');
});

module.exports = router;