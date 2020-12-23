import React from "react";
import {
    Button,
    FormControl,
    FormGroup,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ForumIcon from '@material-ui/icons/Forum';
import ModalBlock  from "../components/ModalBlock";


export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    loginSideField: {
        marginBottom: 18,

    },
    blueSide: {
        backgroundColor: 'rgb(122, 204, 254)',
        flex: "0 0 50%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    lightIconTwitter: {
        position: 'absolute',
        left: '70%',
        top: '50%',
        color: 'rgba(29,161,242,1.00)',
        transform: 'translate(-50%, -50%)',
        width: '170%',
        height: '170%',
    },
    loginSide: {
        backgroundColor: '#fff',
        zIndex: 10,
        flex: "0 0 50%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 30,
        marginBottom: 45,
        marginTop: 20,
    },
    loginDescription: {
        fontWeight: 700,
        marginBottom: 12,
    },
    formTop: {
        marginBottom: 15,
    },
    registerSideField: {
        marginBottom: 25,
    },
    blueSideList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        color: '#ffffff',
        width: 400,
        zIndex: 10,
        '& h6': {
            display: 'flex',
            fontWeight: 500,
            fontSize: 20,
            marginBottom: 35,
            '& svg': {
                fontSize: 32,
                marginRight: 10,
            },
        },
    },
}));

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = ():void => {
        setOpen('signIn')
    };
    const handleClickOpenSignUp = ():void => {
        setOpen('signUp')
    };
    const handelCloseModel = (): void => {
        setOpen(undefined);
    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <TwitterIcon className={classes.lightIconTwitter}/>
                <ul className={classes.blueSideList}>
                    <li style={{ marginBottom: 7}}>
                        <Typography variant="h6" >
                            <SearchIcon/>
                            Читайте о том, что Вам интересно.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: 7}}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon />
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li style={{ marginBottom: 7}}>
                        <Typography variant="h6">
                            <ForumIcon />
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>

                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon}/>
                    <Typography variant="h4" className={classes.loginSideTitle}>Узнайте, что происходит в мире прямо сейчас.</Typography>
                    <Typography className={classes.loginDescription}>Присоединяйтесь к Тввитеру прямо сейчас!</Typography>
                    <Button variant="contained" color="primary" fullWidth className={classes.formTop} onClick={handleClickOpenSignUp}>Зарегестрироваться</Button>
                    <Button variant="outlined" color="primary" fullWidth onClick={handleClickOpenSignIn}>Войти</Button>

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
                </div>
            </div>
        </div>
    );
};