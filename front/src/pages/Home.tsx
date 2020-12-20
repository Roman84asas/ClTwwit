import React from "react";
import {createStyles, makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {Tweet} from "../components/Tweet/index";

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import grey from '@material-ui/core/colors/grey';

import {Container, IconButton, InputBase, Typography} from "@material-ui/core";



export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        fontSize: 35,
        marginBottom: '10px 0',
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
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        padding: '10px 10px',
        '& h5': {
            fontWeight: 900,
        },
    },
    tweet: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
        },
    },
    tweetUserName: {
        color: grey[500],
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450,
    },
}));


const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 45,
            padding: 0,

        },
    }),
)(InputBase);

export const Home = () => {
    const classes = useHomeStyles();
    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <ul className={classes.sideMenuLists}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton color='primary' >
                                <TwitterIcon className={classes.logo}/>
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
                    <Paper variant="outlined" className={classes.tweetsWrapper}>
                        <Paper variant="outlined" className={classes.tweetsHeader}>
                            <Typography variant="h5">
                                Главная
                            </Typography>
                        </Paper>
                        <Tweet
                            text='Machine Learning AZ™: Hands-On Python & R In Data Science Learn to create Machine Learning Algorithms in Python and R from two Data Science experts '
                            user={{
                                fullname: 'Roman Mereneanu',
                                username: 'RMereneanu',
                                avatar: 'https://pbs.twimg.com/profile_images/977608975771426816/0YqLd6K2_bigger.jpg'
                            }}
                            classes={classes}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        placeholder="Поиск по Твиттеру"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Container>
    )
};