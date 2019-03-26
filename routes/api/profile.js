const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load Person Model
const Person = require("../../models/Person");

//Load Profile Model
const Profile = require("../../models/Profile");

// @type    GET
//@route    /api/profile/
// @desc    route for personnal user profile
// @access  PRIVATE
router.get(
    "/",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        Profile.findOne({
                user: req.user.id
            })
            .then(profile => {
                if (!profile) {
                    return res.status(404).json({
                        profilenotfound: "No profile Found"
                    });
                }
                res.json(profile);
            })
            .catch(err => console.log("got some error in profile " + err));
    }
);

// @type    POST
//@route    /api/profile/
// @desc    route for UPDATING/SAVING personnal user profile
// @access  PRIVATE
router.post(
    "/",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        const profileValues = {};
        profileValues.user = req.user.id;
        if (req.body.username) profileValues.username = req.body.username;
        if (req.body.website) profileValues.website = req.body.website;
        if (req.body.country) profileValues.country = req.body.country;
        if (req.body.portfolio) profileValues.portfolio = req.body.portfolio;
        if (typeof req.body.languages !== undefined) {
            profileValues.languages = req.body.languages.split(",");
        }
        //get social links
        profileValues.social = {};

        if (req.body.youtube) profileValues.social.youtube = req.body.youtube;
        if (req.body.facebook) profileValues.social.facebook = req.body.facebook;
        if (req.body.instagram) profileValues.social.instagram = req.body.instagram;

        //Do database stuff
        Profile.findOne({
                user: req.user.id
            })
            .then(profile => {
                if (profile) {
                    Profile.findOneAndUpdate({
                            user: req.user.id
                        }, {
                            $set: profileValues
                        }, {
                            new: true
                        })
                        .then(profile => res.json(profile))
                        .catch(err => console.log("problem in update" + err));
                } else {
                    Profile.findOne({
                            username: profileValues.username
                        })
                        .then(profile => {
                            //Username already exists
                            if (profile) {
                                res.status(400).json({
                                    username: "Username already exists"
                                });
                            }
                            //save user
                            new Profile(profileValues)
                                .save()
                                .then(profile => res.json(profile))
                                .catch(err => console.log(err));
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => console.log("Problem in fetching profile" + err));
    }
);


// @type    GET
//@route    /api/profile/:username
// @desc    route for getting user profile based on Username
// @access  PUBLIC
router.get('/:username', function (req, res) {
    Profile.findOne({
            username: req.params.username
        })
        .populate('user', ["name", "profilepic"])
        .then(profile => {
            if (!profile) {
                res.send(404).json({
                    username: 'user not found'
                });
            }
            res.json(profile);

        })
        .catch(err => console.log('Error in fetching username ' + err));
});

// @type    GET
//@route    /api/profile/find/everyone
// @desc    route for getting user profile of Everyone
// @access  PUBLIC
router.get('/find/everyone', function (req, res) {
    Profile.find({})
        .populate('user', ["name", "profilepic"])
        .then(profile => {
            if (!profile) {
                res.send(404).json({
                    username: 'users not found'
                });
            }
            res.json(profile);

        })
        .catch(err => console.log('Error in fetching username ' + err));
});

// @type    DELETE
//@route    /api/profile/
// @desc    route for deteting user based on ID
// @access  PRIVATE
router.delete('/',
    passport.authenticate('jwt', {
        session: false
    }), (req, res) => {
        Profile.findOne({
            user: req.user.id
        });
        Profile.findOneAndRemove({
                user: req.user.id
            })
            .then(() => {
                Person.findOneAndRemove({
                    _id: req.user.id
                }).then(() => res.json({
                    success: 'delete was a success'
                })).catch(err => console.log(err));
            }).catch(err => console.log(err));
    });




module.exports = router;