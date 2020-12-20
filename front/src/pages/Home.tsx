import React from "react";
import {createStyles, makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {Tweet} from "../components/Tweet/";
import {SideMenu} from "../components/SideMenu";

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
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '10px 15px',
            borderRadius: '30px',
            cursor: 'pointer',
            '& svg': {
                marginRight: 15,
            },
            '&:hover': {
                backgroundColor: 'rgba(29,161,242,0.1)',
                color: 'rgb(29, 161, 242)',
            },
        },
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
                    <SideMenu classes={classes} />
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
                        <Tweet
                            text='Machine Learning AZ™: Hands-On Python & R In Data Science Learn to create Machine Learning Algorithms in Python and R from two Data Science experts '
                            user={{
                                fullname: 'Roman Mereneanu',
                                username: 'RMereneanu',
                                avatar: 'https://pbs.twimg.com/profile_images/977608975771426816/0YqLd6K2_bigger.jpg'
                            }}
                            classes={classes}
                        />
                        <Tweet
                            text='Machine Learning AZ™: Hands-On Python & R In Data Science Learn to create Machine Learning Algorithms in Python and R from two Data Science experts '
                            user={{
                                fullname: 'Roman Mereneanu',
                                username: 'RMereneanu',
                                avatar: 'https://pbs.twimg.com/profile_images/977608975771426816/0YqLd6K2_bigger.jpg'
                            }}
                            classes={classes}
                        />
                        <Tweet
                            text='Machine Learning AZ™: Hands-On Python & R In Data Science Learn to create Machine Learning Algorithms in Python and R from two Data Science experts '
                            user={{
                                fullname: 'Roman Mereneanu',
                                username: 'RMereneanu',
                                avatar: 'https://pbs.twimg.com/profile_images/977608975771426816/0YqLd6K2_bigger.jpg'
                            }}
                            classes={classes}
                        />
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