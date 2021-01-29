import React from "react";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";


import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStyles} from "../index";
import {LoginFormProps} from "./LoginModal";
import {fetchSignIn} from "../../../store/ducks/user/actionCreators";
import {useDispatch} from "react-redux";
import {Color} from "@material-ui/lab/Alert";

interface RegisterModalProps {
    open: boolean;
    onClose: ()=>void;
}

export interface RegisterFormProps {
   fullname: string;
   username: string;
   email: string;
   password: string;
}

const RegisterModalSchema = yup.object().shape({
    fullname: yup.string().required('Введите свое имя'),
    username: yup.string().required('Введите свой логин'),
    mail: yup.string().email().required(),
    password: yup.string().min(6).required().matches(
        /^[a-zA-Z0-9]*$/
    ),
});


export const RegisterModal: React.FC<RegisterModalProps> = ({open, onClose}: RegisterModalProps): React.ReactElement => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const openNotificationRef = React.useRef<(text: string, type: Color)=>void>(()=>{});

    const {control, register, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(RegisterModalSchema)
    });
    const onSubmit = async (data: RegisterFormProps) =>{
        dispatch(fetchSignIn(data));
    };
    return(
        <ModalBlock title="Создайте учетную запись" visible={open} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <Controller
                            as={TextField}
                            className={classes.loginSideField}
                            autoFocus
                            name="fullname"
                            id="name"
                            label="Имя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="name"
                            variant="filled"
                            fullWidth
                        />
                        <Controller
                            as={TextField}
                            className={classes.loginSideField}
                            autoFocus
                            name="email"
                            id="email"
                            label="Email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="email"
                            variant="filled"
                            fullWidth
                        />
                        <Controller
                            as={TextField}
                            className={classes.registerSideField}
                            autoFocus
                            name="password"
                            id="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Ваш пароль"
                            type="password"
                            variant="filled"
                            fullWidth
                        />
                    </FormGroup>
                </FormControl>
                <Button onClick={onClose} color="primary" variant="contained" fullWidth style={{marginBottom: 20}}>
                    Зарегестрироваться
                </Button>
            </form>
        </ModalBlock>
    )
};