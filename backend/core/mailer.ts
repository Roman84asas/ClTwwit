import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();


const options = {
    host: process.env.NODEMAILER_HOST || 'smtp.mailtrap.io',
    port: process.env.NODEMAILER_PORT || 2525,
    auth: {
        user: process.env.NODEMAILER_USER || 'ed302ff71e95b5',
        pass: process.env.NODEMAILER_PASS || '532563da02b2cd',
    },
};

const transport = nodemailer.createTransport(options);
export default transport;