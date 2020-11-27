import React from "react";
import {makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100%',
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

            </div>
        </div>
    )
}
export default SignIn;