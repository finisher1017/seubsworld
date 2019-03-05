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

// about me route
router.get('/about', (req, res) => {
    res.render('about');
});

// resume page
router.get('/resume', (req, res) => {
    res.render('resume');
});



module.exports = router;