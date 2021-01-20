import React from 'react';
import Alert, {Color} from "@material-ui/lab/Alert";
import {Snackbar} from "@material-ui/core";

interface NotificationProps {
    children: (callback: (text: string, type: Color) => void) => React.ReactElement;
}


export const Notification: React.FC<NotificationProps> = ({children}: NotificationProps): React.ReactElement => {
    const [open, setOpen] = React.useState(false);
    const [notificationObj, setNotificationObj] = React.useState<{text: string, type: Color}>();

    const openNotification = (text: string, type: Color) => {
        setNotificationObj({
            text,
            type
        });
        setOpen(true);
    };

    return(
        <>
            {children(openNotification)}
            <Snackbar open={open} autoHideDuration={6000} onClose={()=> setOpen(false)}>
                <Alert onClose={()=> setOpen(false)} severity={notificationObj?.type}>
                    {notificationObj?.text}
                </Alert>
            </Snackbar>
        </>
    )
};