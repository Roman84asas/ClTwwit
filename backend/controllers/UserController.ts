import dotenv from 'dotenv';
import express from "express";
import { validationResult } from "express-validator";
import { UserModel } from "../models/UserModel";
import { generatedHash } from "../utils/generathash";
import mailer from '../core/mailer';
import { SentMessageInfo } from "nodemailer";

dotenv.config();
class UserController {
    
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const users = await UserModel.find({}).exec();
        res.json({
            status: 'success',
            data: users,
        });
        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }        
    }

    async create(req:express.Request, res: express.Response): Promise<void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({status: 'error', message: errors.array()});
            };
            const data = {
                email: req.body.email,
                fullname: req.body.fullname,
                username: req.body.username,
                password: req.body.password,
                confirmed_hash: generatedHash(process.env.SECRET_KEY || Math.random().toString()),
            }
            const user = await UserModel.create(data);
            res.json({
                status: 'success',
                data: user
            });
            mailer.sendMail(
                {
                from: "admin@test.com",
                to: req.body.email,
                subject: "Подтверждение регистрации",
                html: `Подтверждение регистрации по адрессу <a href='http://localhost:${process.env.PORT || 8000}/signup/verify?hash=${data.confirmed_hash}'></a>.`,
            },
            function (error:Error | null, info: SentMessageInfo) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(info);
                }
            }      
            );
        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }
    }


};
export const UserCtrl = new UserController;