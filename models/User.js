const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 } // to asign default value a object is provided
})

mongoose.model('users', userSchema); // load
