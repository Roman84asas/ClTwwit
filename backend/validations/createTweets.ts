import {body} from 'express-validator';

export const createTweetValidations = [
    body('text', 'Введите текст!').isString().isLength({min:2,max:280,}).withMessage('Максимальное колличество символов 280!'),
];