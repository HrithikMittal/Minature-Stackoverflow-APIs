const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Person Model
const Person = require("../../models/Person");

//Load Profile Model
const Profile = require('../../models/Profile');

// @type    GET
// @route    /api/profile/
// @desc    route for personal user profile
// @access  PRIVATE
router.get(
    '/',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        Profile.findOne({
                user: req.user.id
            })
            .then(profile => {
                if (!profile) {
                    return res.status(404).json({
                        Profilenotfoulderror: "Profile Not found here"
                    });
                }
                res.json(profile);
            })
            .catch(err => console.log("got some error in profile " + err));
    });

module.exports = router;