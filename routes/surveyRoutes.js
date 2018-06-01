const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');


const Survey = mongoose.model('surveys'); // to avoid problem with test dont require the model from the tree filestructure

module.exports = app => {

    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thanks for Voting!')
    })

    app.post('/api/surveys', requireLogin, requireCredits,  async (req, res) => {

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

        try {
            await mailer.send();
            await survey.save();

            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user); // we send the updated user model.            
        } catch (err) {
            res.status(422).send(err);
        }


    })

};
