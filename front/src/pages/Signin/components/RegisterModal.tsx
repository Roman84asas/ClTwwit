import React from "react";
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStyles} from "../index";

interface RegisterModalProps {
    open: boolean;
    onClose: ()=>void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({open, onClose}: RegisterModalProps): React.ReactElement => {
    const classes = useStyles();

    return(
        <ModalBlock title="Создайте учетную запись" visible={open} onClose={onClose}>
            <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id="name"
                        label="Имя"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="name"
                        variant="filled"
                        fullWidth
                    >
                    </TextField>
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id="email"
                        label="Email"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="email"
                        variant="filled"
                        fullWidth
                    >
                    </TextField>
                    <TextField
                        className={classes.registerSideField}
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
                Зарегестрироваться
            </Button>
        </ModalBlock>
    )
};