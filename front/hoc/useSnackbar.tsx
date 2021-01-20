import React from 'react';
import {Alert} from "@material-ui/lab";
import {Snackbar} from "@material-ui/core";




export const useSnackbar = (children: React.ReactElement) => {
    const [open, setOpen] = React.useState(false);
    const [notificationText, setNotificationText] = React.useState<string>('');

    const handleOpenNotification = (text: string) => {
        setNotificationText(text);
    };

    return(
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={()=> setOpen(false)}>
                <Alert onClose={()=> setOpen(false)} severity="success">
                    {notificationText}
                </Alert>
            </Snackbar>
        </>
    )
};