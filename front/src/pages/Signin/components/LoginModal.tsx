import React from "react";
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStyles} from "../index";

interface LoginModalProps {
    open: string | undefined;
    handelCloseModel: ()=>void;
    classes: ReturnType<typeof useStyles>;
}

export const LoginModal: React.FC<LoginModalProps> = ({open, handelCloseModel, classes}: LoginModalProps): React.ReactElement => {
    return(
        <ModalBlock title="Войти в Твиттер" visible={open === 'signIn'} onClose={handelCloseModel}>
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
            <Button onClick={handelCloseModel} color="primary" variant="contained" fullWidth style={{marginBottom: 20}}>
                Войти
            </Button>
        </ModalBlock>
    )
};