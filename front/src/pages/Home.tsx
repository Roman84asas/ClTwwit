import React from "react";

import {Tweet} from "../components/Tweet/";
import {SideMenu} from "../components/SideMenu";

import {makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ImageOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import {
    Container,
    TextareaAutosize,
    CircularProgress,
    Typography,
    TextField,
    IconButton,
    Button,
    InputAdornment,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemAvatar,
    Avatar
} from "@material-ui/core";





export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        fontSize: 35,
        margin: '20px 0',
    },
    sideMenuLists: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuListItem: {
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            marginBottom: 10,
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
    sideMenuTweetButton: {
        marginTop: 20,
        padding: theme.spacing(3),
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
        display: 'flex',
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
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetUserName: {
        color: grey[500],
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450,
    },
}));


const SearchTextField = withStyles((theme: Theme) =>({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            padding: 0,
            paddingLeft: 15,
            '& .Mui-focused': {
                backgroundColor: '#fff',
                '& fieldset': {
                    borderWidth: 1,
                    borderColor: theme.palette.primary.main,
                },
                '& svg path': {
                    borderColor: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& fieldset': {
                    borderColor: 'transparent',
                },
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px 14px 5px',
        },
    }
}))(TextField);

export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();
    return (
        <Container maxWidth="lg" className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid  xs={3} item>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid  xs={6} item>
                    <Paper variant="outlined" className={classes.tweetsWrapper}>
                        <Paper variant="outlined" className={classes.tweetsHeader}>
                            <Typography variant="h5">
                                Главная
                            </Typography>
                        </Paper>
                        <Paper>
                           <div className={classes.addForm}>
                               <div className={classes.addFormBody}>
                                   <Avatar
                                       className={classes.tweetAvatar}
                                       alt={`Аватарка пользователя UserAvatar`}
                                       src="https://pbs.twimg.com/profile_images/977608975771426816/0YqLd6K2_bigger.jpg"
                                   />
                                   <TextareaAutosize
                                       className={classes.addFormTextarea}
                                       placeholder="Что происходит?"
                                   />
                               </div>
                               <div className={classes.addFormBottom}>
                                   <div className={classes.addFormBottomActions}>
                                       <IconButton color="primary">
                                           <ImageOutlinedIcon style={{ fontSize: 26}} />
                                       </IconButton>
                                       <IconButton color="primary">
                                           <EmojiIcon style={{ fontSize: 26}} />
                                       </IconButton>
                                   </div>
                                   <div className={classes.addFormBottomRight}>
                                       <span>280</span>
                                       <div className={classes.addFormCircleProgress}>
                                           <CircularProgress variant="static" size={20} thickness={4} value={18}/>
                                           <CircularProgress
                                               style={{color: 'rgba(0,0,0,0.1)'}}
                                               variant="static"
                                               size={20}
                                               thickness={4}
                                               value={100}/>
                                       </div>
                                       <Button variant="contained" color="primary">
                                           Твитнуть
                                       </Button>
                                   </div>
                               </div>
                           </div>
                            <div className={classes.addFormBottomLine} />
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
                <Grid xs={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} >
                                <b>Актуальные темы</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                    primary="Paris"
                                    secondary={
                                        <Typography component="span" variant="body2">
                                            Твитов:3 388
                                        </Typography>
                                    }
                                    />
                                </ListItem>
                                <Divider component='li' />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#Paris"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                Твитов:3 388
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider component='li' />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary="#Paris"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                Твитов:3 388
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Paper>
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
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
};