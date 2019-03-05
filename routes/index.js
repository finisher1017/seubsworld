const express = require("express");
const router = express.Router();
const passport = require("passport");

// home page route
router.get('/', (req, res) => {
    res.render('home');
});

// registration page route
router.get('/registration', (req, res) => {
    res.render('register');
});

// login page route
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;