const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jsonwt = require('jsonwebtoken');
const passport = require('passport');
const passportjwt = require('passport-jwt');
const key = require('../../setup/myurl');

// @type   GET
// @route  /api/auth
// @desc   just for testing
// @access PUBLIC
router.get('/', (req, res) => {
    res.json({
        'Test': 'Auth is successful'
    });
});

// Import Schema for Person to Register
const Person = require("../../models/Person");

// @type   POST
// @route  /api/auth/register
// @desc   route for registration of users
// @access PUBLIC
router.post('/register', function (req, res) {
    Person.findOne({
        email: req.body.email
    }).then((req, res) => {
        console.log('Everything is fine')
    }).catch(err => console.log(err));
});


module.exports = router;