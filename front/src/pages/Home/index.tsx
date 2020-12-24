import React from "react";

import {Tweet} from "../../components/Tweet/";
import {SideMenu} from "../../components/SideMenu";


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import {
    Container,
    Typography,
    Button,
    InputAdornment,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemAvatar,
    Avatar
} from "@material-ui/core";
import {AddTweetForm} from "../../components/AddTweetForm";

import {useHomeStyles} from "./theme";
import {SearchTextField} from "../../components/SearchTextField";



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
                            <div  className={classes.addForm}>
                                <AddTweetForm classes={classes} />
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