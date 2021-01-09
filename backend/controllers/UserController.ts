import express from "express";
import { validationResult } from "express-validator";
import { UserModel } from "../models/UserModel";
import { generatedHash } from "../utils/generathash";
import { sendEmail } from '../utils/sendEmail';

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
                return
            };
            const data = {
                email: req.body.email,
                fullname: req.body.fullname,
                username: req.body.username,
                password: req.body.password,
                confirmHash: generatedHash(process.env.SECRET_KEY || Math.random().toString()),
            }
            const user = await UserModel.create(data);
            res.json({
                status: 'success',
                data: user
            });
            sendEmail({
                emailFrom: "admin@test.com",
                emailTo: req.body.email,
                subject: "Подтверждение регистрации",
                html: `Подтверждение регистрации по адрессу <a href='http://localhost:${process.env.PORT || 8000}/signup/verify?hash=${data.confirmHash}'></a>.`,
            },
            (error: Error | null ) => {
                if (error) {
                    res.json({
                        status: 'error',
                        message: error,
                    });
                }
            }
            );            
        } catch (err) {
            res.json({
                status: 'error',
                message: JSON.stringify(err),
            });
        }
    }


};
export const UserCtrl = new UserController;