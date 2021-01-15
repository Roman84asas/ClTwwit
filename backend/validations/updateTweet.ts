import {body} from 'express-validator';

export const updateTweet = [
    body('text', 'Введите текст!').isString().isLength({min:2,max:280,}).withMessage('Максимальное колличество символов 280!'),
];