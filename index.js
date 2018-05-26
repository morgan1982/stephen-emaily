const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoUri, (err) => {
    if (err) throw err;
    console.log('connected to mongo..');
});


const app = express(); // creates a new application

// return a function that expects an arg
require('./routes/authRoutes')(app);





const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
}); 


