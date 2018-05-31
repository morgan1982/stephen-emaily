const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');


class Mailer extends helper.Mail {

    /* takes the destructured values from the survey inside the
     surveyRoute.js and the content from the template
     */
    costructor({ subject, recipients }, content) {
        super();

        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);
    }
    // recipients have the attribute email that is destructured here
    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        })
    }
}



module.exports = Mailer;