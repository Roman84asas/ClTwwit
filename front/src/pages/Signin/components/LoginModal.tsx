import React from "react";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStyles} from "../index";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Notification} from '../../../components/Notification/Notification'

import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {AuthApi} from "../../../services/api/authApi";
import {Color} from "@material-ui/lab/Alert";


interface LoginModalProps {
    open: boolean;
    onClose: ()=>void;
}

export interface LoginFormProps {
    username: string;
    password: string;
}

const LoginModalSchema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required().matches(
        /^[a-zA-Z0-9]*$/
    ),
});

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose }: LoginModalProps): React.ReactElement => {
    const classes = useStyles();
    const {control, register, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginModalSchema)
    });
    const onSubmit = async (openNotification: (text: string, type: Color)=>void,data: LoginFormProps) =>{

        console.log(data);
        try {
            const userData = await AuthApi.signIn(data);
        } catch (e) {
            openNotification('еверный логин или пароль', 'error');
        }
    };



    return(<Notification>
            {
                openNotification => (
                    <ModalBlock title="Войти в Твиттер" visible={open} onClose={onClose}>
                        <form onSubmit={handleSubmit(onSubmit.bind(null, openNotification))}>
                            <FormControl component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        name="username"
                                        className={classes.loginSideField}
                                        autoFocus
                                        id="username"
                                        defaultValue=""
                                        label="Email пользователя"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        type="email"
                                        inputRef={register}
                                        variant="filled"
                                        fullWidth
                                        error={!!errors.username}
                                        helperText={errors.username && "Емаил должен иметь минимум 6 символом и обязателен"}
                                    />
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        defaultValue=""
                                        name="password"
                                        className={classes.loginSideField}
                                        autoFocus
                                        id="password"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        label="Ваш пароль"
                                        type="password"
                                        variant="filled"
                                        inputRef={register}
                                        fullWidth
                                        error={!!errors.password}
                                        helperText={errors.password && "Паспорт должен иметь минимум 6 символом"}
                                    />
                                </FormGroup>
                            </FormControl>
                            <Button type="submit" color="primary" variant="contained" fullWidth style={{marginBottom: 20}} >
                                Войти
                            </Button>
                        </form>
                    </ModalBlock>
                )
            }
    </Notification>
    )
};