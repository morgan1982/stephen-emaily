const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');


const Survey = mongoose.model('surveys'); // to avoid problem with test dont require the model from the tree filestructure

module.exports = app => {

    app.post('/api/surveys', requireLogin, requireCredits,  (req, res) => {

        const { title, subject, body, recipients } = req.body;

        // recipients will take a string of emails seperated by ","
        // it needs to be maped to an object
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',')
                                    .map(email => (
                                                { email: email.trim() })
                                                ),
            _user: req.user.id,
            dateSend: Date.now()
        });

        const mailer = new Mailer(survey, surveyTemplate(survey));
        mailer.send();

    })

};
