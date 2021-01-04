import React from "react";
import {useHistory} from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {IconButton} from "@material-ui/core";
import {useHomeStyles} from "../../pages/Home/theme";

interface BackButtonProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const BackButton: React.FC<BackButtonProps> = ({classes}: BackButtonProps): React.ReactElement => {
    const history = useHistory();

    const handleClickButton = () => {
        history.goBack();
    };
    return (
        <IconButton onClick={handleClickButton} color='primary' >
            <ArrowBackIcon className={classes.logo}/>
        </IconButton>
    )
};