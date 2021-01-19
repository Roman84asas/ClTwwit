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

const schema = yup.object().shape({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
});

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose }: LoginModalProps): React.ReactElement => {
    const classes = useStyles();

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