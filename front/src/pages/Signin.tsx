import React from "react";
import {makeStyles} from "@material-ui/core";
//import theme from "../theme";


const useStyles = makeStyles((theme) => ({
    wrapper: {},
    blueSide: {},
    loginSide: {},
}));

function SignIn() {
    const classes = useStyles();

    return (
        <div>
            Sign in
        </div>
    )
}
export default SignIn;