const express = require("express");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoUri, (err) => {
    if (err) throw err;
    console.log('connected to mongo..');
});


const app = express(); // creates a new application

// enable cookies
app.use(
    cookieSession({
        maxAge:  30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] // can write multiple keys inside the array for advanced ptotection 
    })
);
app.use(passport.initialize());
app.use(passport.session());

// return a function that expects an arg
require('./routes/authRoutes')(app);





const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
}); 


