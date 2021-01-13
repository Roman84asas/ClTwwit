import express from "express";
import { validationResult } from "express-validator";
import { TweetModel } from "../models/TweetModel";
import { isValidObjectId } from "../utils/isValidObjectId";

class TweetsController {
    //return all Tweets
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const tweets = await TweetModel.find({}).exec();
            res.json({
                status: 'success',
                data: tweets,
            }); 
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
            const tweetId = req.params.id;
            if (!isValidObjectId(tweetId)) {
                res.status(400).send();
                return
            }

            const tweet = await TweetModel.findOne({_id: tweetId}).exec();
            if (!tweet) {
                res.status(404).send();
                return
            }

            res.json({
                status: 'success',
                data: tweet,
            });
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