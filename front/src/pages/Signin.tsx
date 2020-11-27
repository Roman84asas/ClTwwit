import React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        backgroundColor: '#1DA1F2',
    },
    loginSide: {},
}));

function SignIn() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <ul>
                    <li>
                        <Typography>
                            Читайте о том, что Вам интересно.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Присоединяйтесь к общению
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className={classes.loginSide}>
                <TwitterIcon />
                <Typography>Узнайте, что происходит в мире прямо сейчас.</Typography>
                <Typography>Присоединяйтесь к Тввитеру прямо сейчас!</Typography>
            </div>
        </div>
    )
}
export default SignIn;