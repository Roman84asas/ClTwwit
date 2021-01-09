
import mailer from '../core/mailer';
import { SentMessageInfo } from "nodemailer";

interface SendEmailProps {
    emailFrom: string,
    emailTo: string,
    subject: string,
    html: string,
};

export const sendEmail = ({ emailFrom, emailTo, subject, html }: SendEmailProps,
    callback?: (error: Error | null, info: SentMessageInfo) => void
    ) => {
    mailer.sendMail(
        {
        from: emailFrom,
        to: emailTo,
        subject: subject,
        html: html,
    },
    function (error: Error | null, info: SentMessageInfo) {
        if (error) {
            console.log(error);
        } else {
            console.log(info);
        }
    }      
    );
};