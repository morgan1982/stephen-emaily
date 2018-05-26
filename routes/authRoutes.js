const passport = require('passport');



module.exports = app => {


    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })

    );
    
    // redirects from google with the key
    app.get('/auth/google/callback', passport.authenticate('google'));

}

