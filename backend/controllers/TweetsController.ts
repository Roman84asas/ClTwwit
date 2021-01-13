import express from "express";
import { validationResult } from "express-validator";
import { isValidObjectId } from "../utils/isValidObjectId";

class TweetsController {
    //return all Tweets
    async index(_: any, res: express.Response): Promise<void> {
        try {
           
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }        
    }

    //Return Tweet
    async show(req:express.Request, res: express.Response): Promise<void> {
        try {
            
        } catch (error) {
            res.status(500).json({
                status: 'error',
                user: null
            });
        }        
    }

    //return method creating Tweet
    async create(req:express.Request, res: express.Response): Promise<void> {
        try {
                      
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(err),
            });
        }
    }

    //Delete Tweet
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

export const TweetsCtrl = new TweetsController;