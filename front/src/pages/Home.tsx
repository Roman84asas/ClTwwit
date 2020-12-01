import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';

import {Container, IconButton, Typography} from "@material-ui/core";

const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    sideMenuLists: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center',
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
    },
    sideMenuListItemIcon: {
        fontSize: 25,
    },
}));

export const Home = () => {
    const classes = useHomeStyles();

    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuLists}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton color='primary' >
                                <TwitterIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton color='default' >
                                <SearchIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                                Поиск
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton color='default' >
                                <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                                Уведомления
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton color='default' >
                                <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                                Сообщения
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton color='default' >
                                <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                                Закладки
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton color='default' >
                                <ListAltIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                                Список
                            </Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton color='default' >
                                <PersonIcon className={classes.sideMenuListItemIcon}/>
                            </IconButton>
                            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                                Профиль
                            </Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <Paper >Center</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >Right</Paper>
                </Grid>
            </Grid>
        </Container>
    )
};