import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import PersonAddIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {useHomeStyles} from "../../pages/Home/theme";


export const Users = () => {
    const classes = useHomeStyles();

    return(
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} >
                <b>Кого читать</b>
            </Paper>
            <List>
                <ListItem className={classes.rightSideBlockItem}>
                    <ListItemAvatar>
                        <Avatar
                            alt="Nicolas Babin"
                            src="https://pbs.twimg.com/profile_images/773909130352402432/XKlKwdPG_bigger.jpg"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Paris"
                        secondary={
                            <Typography component="span" variant="body2">
                                Твитов:3 388
                            </Typography>
                        }
                    />
                    <Button color="primary">
                        <PersonAddIcon />
                    </Button>
                </ListItem>
            </List>
        </Paper>
    )
};