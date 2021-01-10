import express from "express";
import { validationResult } from "express-validator";
import { UserModel, UserModelInterface } from "../models/UserModel";
import { generatedHash } from "../utils/generathash";
import { sendEmail } from '../utils/sendEmail';

class UserController {
    //return all Users
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const users = await UserModel.find({}).exec();
        res.json({
            status: 'success',
            data: users,
        });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }        
    }

    //return method creating User
    async create(req:express.Request, res: express.Response): Promise<void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({status: 'error', message: errors.array()});
                return
            };
            const data: UserModelInterface = {
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
                html: `Подтверждение регистрации по адрессу <a href='http://localhost:${process.env.PORT || 8000}/verify?hash=${data.confirmHash}'></a>.`,
            },
            (error: Error | null ) => {
                if (error) {
                    res.status(400).json({
                        status: 'error',
                        message: error,
                    });
                }
            }
            );            
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(err),
            });
        }
    }

    //return method verify created User
    async verify(req:express.Request, res: express.Response): Promise<void> {
        try {
            const hash = req.query.hash;            
            if(!hash) {
                res.status(400).send();
                return
            }
            const user = await UserModel.findOne({confirmHash: String(hash)}).exec();
            if (!user) {
                res.status(404).json({
                    status: 'error',
                    message: "Пользователь не найден!",
                });
            }
            user.confirmed = true;
            user.save();

            res.json({
                status: 'success'
            });   
                        
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }        
    }

};
export const UserCtrl = new UserController;