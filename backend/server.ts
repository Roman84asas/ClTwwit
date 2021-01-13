import dotenv from 'dotenv';
dotenv.config();

require('./core/db');
import express from 'express';
import { UserCtrl } from './controllers/UserController';
import { registerValidator } from './validations/register';
import {passport} from './core/passport';
import { TweetsCtrl } from './controllers/TweetsController';
import { createTweetValidations } from './validations/createTweets';

const app = express();

//App middleware
app.use(express.json())
app.use(passport.initialize());

//Group User 
app.get('/api/users', UserCtrl.index);
app.get('/api/user/me', passport.authenticate('jwt'), UserCtrl.getUserInfo);
app.get('/api/user/:id', UserCtrl.show);
//app.patch('/api/users', UserCtrl.patch);
//app.delete('/api/users', UserCtrl.delete);

//Group Auth 
app.post('/api/auth/register', registerValidator, UserCtrl.create);
app.get('/api/auth/verify', registerValidator, UserCtrl.verify);
app.post('/api/auth/login', passport.authenticate('local'), UserCtrl.afterLogin);

//Group Tweet
app.get('/api/tweets', TweetsCtrl.index);
app.get('/api/tweets/:id', TweetsCtrl.show);
app.post('/api/tweets', createTweetValidations, TweetsCtrl.create);

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:8000`);
});