import React from "react";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStyles} from "../index";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";


interface LoginModalProps {
    open: boolean;
    onClose: ()=>void;
}

const LoginModalSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required().matches(
        /^[a-zA-Z0-9]*$/
    ),
});

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose }: LoginModalProps): React.ReactElement => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(LoginModalSchema)
    });
    const onSubmit = (data: any) => console.log(data);

    return(
        <ModalBlock title="Войти в Твиттер" visible={open} onClose={onClose}>
            <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id="email"
                        label="Email пользователя"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="email"
                        variant="filled"
                        fullWidth
                    >
                    </TextField>
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id="password"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Ваш пароль"
                        type="password"
                        variant="filled"
                        fullWidth
                    >
                    </TextField>
                </FormGroup>
            </FormControl>
            <Button onClick={onClose} color="primary" variant="contained" fullWidth style={{marginBottom: 20}}>
                Войти
            </Button>
        </ModalBlock>
    )
};