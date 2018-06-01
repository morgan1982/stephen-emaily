const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');


class Mailer extends helper.Mail {

    /* takes the destructured values from the survey inside the
     surveyRoute.js and the content from the template
     */
    constructor({ subject, recipients }, content) {
        super();

        this.sgApi = sendgrid(keys.sendGridKey); // returns an object for communicating with the api 
        this.from_email = new helper.Email('Nikos@papadimitrioyNick.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body); // inherited from Mail!
        this.addClickTracking();
        this.addRecipients();
    }

    // recipients have the attribute email that is destructured here
    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        })
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();

        this.recipients.forEach(recepient => {
            personalize.addTo(recepient);
        });
        this.addPersonalization(personalize);
    }

    // send to the sendgrid api
    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        const response = await this.sgApi.API(request);
        return response;

    }


}



module.exports = Mailer;
