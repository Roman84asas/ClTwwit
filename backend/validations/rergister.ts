import {body} from 'express-validator';

export const registerValidator = [
    body('email', 'Введите E-Mail').isEmail().isLength({
        min: 11,
        max: 40
    }).withMessage('Длина адреса почты не корректная!'),

    body('fullname', 'Введите имя')
    .isString()
    .isLength({
        min: 2,
        max: 40
    })
    .withMessage('Длина имени не корректная!'),

    body('username', 'Укажите логин')
    .isString()
    .isLength({
        min: 2,
        max: 40
    })
    .withMessage('Длина логина не корректная!'),

    body('password', 'Укажите пароль')
    .isString()
    .isLength({
        min: 6,
        max: 40
    })
    .withMessage('Пароль не корректен!'),
    
    body('password', 'Укажите пароль')
    .isString()
    .isLength({
        min: 6,
        max: 40
    })
    .withMessage('Пароль не корректен!')
    .custom((value, {req}) => {
        if (value !== req.body.password2) {
            throw new Error('Пароли не совпадают');
        } else {
            return value
        }
    }),
]