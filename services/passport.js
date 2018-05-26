const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users'); // fetch


passport.serializeUser((user, done) => {
    done(null, user.id); // id is the id assinged to the object by mongo not the google id
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})


// iternal identifier of the particular strategy is 'google'
passport.use( new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                        // record exists
                        done(null, existingUser); // error -- null ,  existing user
                    }else {
                        new User({ googleId: profile.id }).save() // takes the id from the profile object (fetched from google)
                            .then(user => done(null, user));
                    }
                });

    })
);