import express from "express";
import { validationResult } from "express-validator";
import { TweetModel, TweetModelInterface } from "../models/TweetModel";
import { UserModelInterface } from "../models/UserModel";
import { isValidObjectId } from "../utils/isValidObjectId";

class TweetsController {
    //return all Tweets
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const tweets = await TweetModel.find({}).populate('user').sort({'created': '-1'}).exec();
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

            const tweet = await TweetModel.findOne({_id: tweetId}).populate('user').exec();
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
            const user = req.user as UserModelInterface;
            if (!user) {
                res.status(404).send();
                return
            }
            if (user?._id) {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    res.status(400).json({status: 'error', message: errors.array()});
                    return
                }
                const data: TweetModelInterface = {
                    text: req.body.text,
                    user: user._id,
                };
                
                const tweet = await TweetModel.create(data);
                res.json({
                    status: 'success',
                    data: await tweet.populate('user').execPopulate()
                });
            }            
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
            const user = req.user as UserModelInterface;
            const tweetId = req.params.id;

            if (!isValidObjectId(tweetId)) {
                res.status(400).send();
                return
            }

            const tweet = await TweetModel.findOne({_id: tweetId});
            if (!tweet) {
                res.status(404).send();
                return
            } 
            if(tweet) {
                if( String(tweet.user._id) === String(user._id) ) {
                    tweet.remove();
                    res.json({
                        status: 'success',
                    });
                } else {
                    res.status(403).send();
                }
            }                 
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(err),
            });
        }
    }

    //Update Tweet
    async update(req:express.Request, res: express.Response): Promise<void> {
        try {
            const user = req.user as UserModelInterface;
            const tweetId = req.params.id;

            if (!isValidObjectId(tweetId)) {
                res.status(400).send();
                return
            }

            const tweet = await TweetModel.findOne({_id: tweetId});
            if (!tweet) {
                res.status(404).send();
                return
            } 
            if(tweet) {
                if( String(tweet.user._id) === String(user._id) ) {
                    tweet.text = req.body.text;
                    tweet.save();
                    res.json({
                        status: 'success',
                    });
                } else {
                    res.status(403).send();
                }
            }                 
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(err),
            });
        }
    }
}

export const TweetsCtrl = new TweetsController;