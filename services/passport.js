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
    callbackURL: '/auth/google/callback',
    proxy: true // tells google strategy to trust the proxy 
        }, 
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })
                    if (existingUser) { // record exists
                        return done(null, user); // error -- null ,  existing user
                    }
                    const user = await new User({ googleId: profile.id }).save() // takes the id from the profile object (fetched from google)
                    done(null, user);
                }
            )  

    );