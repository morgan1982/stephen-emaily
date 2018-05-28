const passport = require('passport');



module.exports = app => {


    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })

    );
    
    // redirects from google with the key
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/surveys');
    });

    app.get('/api/logout', (req, res) => {
        req.logout(); // attached to the object by passport. kills the cookie
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })

}

