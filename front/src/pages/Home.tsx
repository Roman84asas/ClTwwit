import React from "react";
import {createStyles, makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import grey from '@material-ui/core/colors/grey';
import ChatIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/PresentToAllOutlined';

import {Avatar, Container, IconButton, InputBase, Typography} from "@material-ui/core";

const useHomeStyles = makeStyles((theme) => ({
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
                        <Paper variant="outlined" className={classes.tweetsHeader}>
                            <Grid container >
                                <Grid item xs={1}>
                                    <Avatar alt="User Avatar" src="https://sun1-29.userapi.com/impg/CYgQtfMx7yLxGtfGYLrr0Oly-IMf7s5JV7V_LA/x6NxEd7C4n8.jpg?size=50x0&quality=96&crop=1,142,899,899&sign=871e9e636fe8e0549539e2611488e721&ava=1" />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography >
                                        <b>romanmereni</b> <span className={classes.tweetUserName}>@romanmereni</span>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        мы потерпели сегодня тактическое, тяжёлое поражение
                                        невзирая на протесты улицы и политическое меньшинство, промосковским фракциям Додона с примкнувшей фракцией Шор и остатками фракции
                                        беглого мафиози №1 Молдовы Плахотнюка проголосовали скандальные законы 57 мандатами из 101
                                    </Typography>
                                    <div className={classes.tweetFooter}>
                                        <div>
                                            <IconButton >
                                                <ChatIcon style={{ fontSize: 20}}/>
                                            </IconButton>
                                            <span style={{ fontSize: 14, marginLeft: 5 }}>1</span>
                                        </div>
                                        <div>
                                            <IconButton >
                                                <RepeatIcon style={{ fontSize: 20}}/>
                                            </IconButton>
                                            <span style={{ fontSize: 14, marginLeft: 5 }}>1</span>
                                        </div>
                                        <div>
                                            <IconButton >
                                                <LikeIcon style={{ fontSize: 20}}/>
                                            </IconButton>
                                            <span style={{ fontSize: 14, marginLeft: 5 }}>1</span>
                                        </div>
                                        <div>
                                            <IconButton >
                                                <ShareIcon style={{ fontSize: 20}}/>
                                            </IconButton>
                                            <span style={{ fontSize: 14, marginLeft: 5 }}>1</span>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
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