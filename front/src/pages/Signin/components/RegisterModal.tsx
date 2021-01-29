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
    email: yup.string().email().required(),
    password: yup.string().min(6).required().matches(
        /^[a-zA-Z0-9]*$/
    ),
});


export const RegisterModal: React.FC<RegisterModalProps> = ({open, onClose}: RegisterModalProps): React.ReactElement => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const openNotificationRef = React.useRef<(text: string, type: Color)=>void>(()=>{});

    const {control, register, handleSubmit, errors } = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterModalSchema)
    });
    const onSubmit = async (data: RegisterFormProps) =>{
        console.log(data);
    };
    return(
        <ModalBlock title="Создайте учетную запись" visible={open} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <Controller
                            as={TextField}
                            control={control}
                            name="fullname"
                            className={classes.loginSideField}
                            autoFocus
                            id="fullname"
                            defaultValue=""
                            label="Полное имя пользователя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="text"
                            inputRef={register}
                            variant="filled"
                            fullWidth
                            error={!!errors.fullname}
                            helperText={errors.fullname && "Полное имя пользователя должен иметь минимум 6 символом и обязателен"}
                        />
                        <Controller
                            as={TextField}
                            control={control}
                            name="username"
                            className={classes.loginSideField}
                            autoFocus
                            id="username"
                            defaultValue=""
                            label="Логин пользователя"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            type="text"
                            inputRef={register}
                            variant="filled"
                            fullWidth
                            error={!!errors.username}
                            helperText={errors.username && "Логин пользователя должен иметь минимум 6 символом и обязателен"}
                        />
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
                <Button onClick={onClose} color="primary" variant="contained" fullWidth style={{marginBottom: 20}}>
                    Зарегестрироваться
                </Button>
            </form>
        </ModalBlock>
    )
};