import React from 'react';
import {Alert} from "@material-ui/lab";
import {Snackbar} from "@material-ui/core";

interface NotificationProps {
    children: (callback: (text: string) => void) => React.ReactElement;
}


export const Notification: React.FC<NotificationProps> = ({children}: NotificationProps): React.ReactElement => {
    const [open, setOpen] = React.useState(false);
    const [notificationText, setNotificationText] = React.useState<string>('');

    const openNotification = (text: string) => {
        setNotificationText(text);
        setOpen(true);
    };

    return(
        <>
            {children(openNotification)}
            <Snackbar open={open} autoHideDuration={6000} onClose={()=> setOpen(false)}>
                <Alert onClose={()=> setOpen(false)} severity="success">
                    {notificationText}
                </Alert>
            </Snackbar>
        </>
    )
};