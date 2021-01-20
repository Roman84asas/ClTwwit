import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

import {ModalBlock} from "../../../components/ModalBlock";
import {useStyles} from "../index";
import {Notification} from '../../../components/Notification/Notification'

import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {Color} from "@material-ui/lab/Alert";
import {fetchSignIn} from "../../../store/ducks/user/actionCreators";
import {selectUserStatus} from "../../../store/ducks/user/selectors";
import {LoadingState} from "../../../store/ducks/user/contracts/state";


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
    const dispatch = useDispatch();
    const openNotificationRef = React.useRef<(text: string, type: Color)=>void>(()=>{});
    const loadingStatus = useSelector(selectUserStatus);

    const {control, register, handleSubmit, errors } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginModalSchema)
    });
    const onSubmit = async (data: LoginFormProps) =>{
        dispatch(fetchSignIn(data));
    };

    React.useEffect(()=> {
        if (loadingStatus === LoadingState.SUCCESS){
            openNotificationRef.current('Авторизация прошла успешно', 'success');
        } else if (loadingStatus === LoadingState.ERROR) {
            openNotificationRef.current('Неверный логин или пароль', 'error');
        }
    }, [loadingStatus]);

    return(<Notification>
            {
                callback => {
                    openNotificationRef.current = callback;
                    return(
                        <ModalBlock title="Войти в Твиттер" visible={open} onClose={onClose}>
                            <form onSubmit={handleSubmit(onSubmit)}>
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
            }
    </Notification>
    )
};