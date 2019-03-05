const express = require("express");
const router = express.Router();
const passport = require("passport");

// john brown project page
router.get('/projects/john-brown', (req, res) => {
    res.render('projects/john-brown/index.ejs');
});

module.exports = router;