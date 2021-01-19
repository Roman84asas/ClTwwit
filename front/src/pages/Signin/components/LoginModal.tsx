import React from "react";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStyles} from "../index";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";


interface LoginModalProps {
    open: boolean;
    onClose: ()=>void;
}

interface LoginFormProps {
    email: string;
    password: string;
}

const LoginModalSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required().matches(
        /^[a-zA-Z0-9]*$/
    ),
});

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose }: LoginModalProps): React.ReactElement => {
    const classes = useStyles();
    const {control, register, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginModalSchema)
    });
    const onSubmit = (data: LoginFormProps) => console.log(data);

    return(
        <ModalBlock title="Войти в Твиттер" visible={open} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <Controller
                        as={TextField}
                        control={control}
                        name="email"
                        className={classes.loginSideField}
                        autoFocus
                        id="email"
                        defaultValue=""
                        label="Email пользователя"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="email"
                        inputRef={register}
                        variant="filled"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email && "Емаил должен иметь минимум 6 символом и обязателен"}
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
            <Button type="submit" color="primary" variant="contained" fullWidth style={{marginBottom: 20}}>
                Войти
            </Button>
            </form>
        </ModalBlock>
    )
};