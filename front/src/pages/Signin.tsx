import React from "react";
import {
    Button, Checkbox, Radio,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControl, FormGroup, FormLabel,
    IconButton,
    makeStyles, TextField,
    Typography, DialogActions
} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ForumIcon from '@material-ui/icons/Forum';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
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
    margin: {},
}));

function SignIn() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handelClose = ()=> {
        setOpen(false);
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
                    <Button variant="contained" color="primary" fullWidth className={classes.formTop}>Зарегестрироваться</Button>
                    <Button variant="outlined" color="primary" fullWidth onClick={handleClickOpen}>Войти</Button>

                    <Dialog onClose={handelClose} open={open}>
                        <DialogTitle id="form-dialog-title">
                            <IconButton
                                onClick={handelClose}
                                color="secondary"
                                aria-label='close'
                                className={classes.margin}
                            >
                                <CloseIcon style={{fontSize: 26}}/>
                            </IconButton >
                            Настройка поиска
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Gjlgbibntcm
                            </DialogContentText>
                            <FormControl component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                    >
                                        <div>
                                            <div>
                                                <FormLabel style={{ display: 'flex'}}>
                                                    <p style={{flex: 1}}>Скрыть содержания</p>
                                                    <Checkbox color="primary"/>
                                                </FormLabel>
                                                <Typography variant="body2">
                                                    Предотвращает появление содержимого поиска.
                                                </Typography>
                                            </div>
                                            <div>
                                                <Radio value="a" name="radio-button-data"/>
                                            </div>
                                        </div>
                                    </TextField>
                                </FormGroup>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handelClose} color="primary" fullWidth>
                                Cancel
                            </Button>
                            <Button onClick={handelClose} color="primary" variant="contained" fullWidth>
                                Subscribe
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}
export default SignIn;