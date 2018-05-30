const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');


const Survey = mongoose.model('surveys'); // to avoid problem with test dont require the model from the tree filestructure

module.exports = app => {

    app.post('/api/surveys', requireLogin, requireCredits,  (req, res) => {

        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({

        })

    })

};
