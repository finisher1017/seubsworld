const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get('/projects/omega-man', (req, res) => {
    res.render('projects/omega-man/omega-man');
});

module.exports = router;