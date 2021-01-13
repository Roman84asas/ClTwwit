import express from "express";
import { validationResult } from "express-validator";
import  mongoose  from "mongoose";

const isValidObjectId = mongoose.Types.ObjectId.isValid;

class TweetsController {
    //return all Users
    async index(_: any, res: express.Response): Promise<void> {
        try {
           
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }        
    }

    //Return User
    async show(req:express.Request, res: express.Response): Promise<void> {
        try {
            
        } catch (error) {
            res.status(500).json({
                status: 'error',
                user: null
            });
        }        
    }

    //return method creating User
    async create(req:express.Request, res: express.Response): Promise<void> {
        try {
                      
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(err),
            });
        }
    }

    async delete(req:express.Request, res: express.Response): Promise<void> {
        try {
                      
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(err),
            });
        }
    }
};

export const UserCtrl = new UserController;