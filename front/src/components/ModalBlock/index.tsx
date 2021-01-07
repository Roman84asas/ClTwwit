import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from '../../pages/Signin'

interface ModalBlockProps {
    title?:string;
    children: React.ReactNode;
    visible?: boolean;
    classe?: ReturnType<typeof useStyles>;
    onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = (
    {
        title,
        children,
        visible = false,
        onClose
    }: ModalBlockProps): React.ReactElement | null => {
    if (!visible) {
        return null;
    }

    return (
        <Dialog onClose={onClose} open={visible} fullWidth aria-label="position">
            <DialogTitle id="form-dialog-title">
                <IconButton
                    onClick={onClose}
                    color="secondary"
                    aria-label='close'
                >
                    <CloseIcon style={{fontSize: 26}} color="primary"/>
                </IconButton >
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};