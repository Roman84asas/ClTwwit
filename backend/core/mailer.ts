import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();


const options = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: 'ed302ff71e95b5',
        pass: '532563da02b2cd',
    },
};

const transport = nodemailer.createTransport(options);
export default transport;