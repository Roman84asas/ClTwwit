import React from "react";
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {ModalBlock} from "../../../components/ModalBlock";
import {useStyles} from "../index";

interface RegisterModalProps {
    open: string | undefined;
    handelCloseModel: ()=>void;
    classes: ReturnType<typeof useStyles>;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({open, handelCloseModel, classes}: RegisterModalProps): React.ReactElement => {
    return(
        <ModalBlock title="Создайте учетную запись" visible={open === 'signUp'} onClose={handelCloseModel}>
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
            <Button onClick={handelCloseModel} color="primary" variant="contained" fullWidth style={{marginBottom: 20}}>
                Зарегестрироваться
            </Button>
        </ModalBlock>
    )
};