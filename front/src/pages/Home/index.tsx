import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Route } from "react-router-dom";

import {Tweet} from "../../components/Tweet/";
import {SideMenu} from "../../components/SideMenu";


import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";

import {useHomeStyles} from "./theme";

import {AddTweetForm} from "../../components/AddTweetForm";
import {SearchTextField} from "../../components/SearchTextField";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { Container, Typography, Button, InputAdornment, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import {fetchTags} from "../../store/tags/actionCreators";
import {Tags} from "../../components/Tags/Tags";






export const Home = (): React.ReactElement => {
    const classes = useHomeStyles();

    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);


    React.useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);

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
                       <Route path="/home/">
                           <Paper>
                               <div  className={classes.addForm}>
                                   <AddTweetForm classes={classes} />
                               </div>
                               <div className={classes.addFormBottomLine} />
                           </Paper>
                       </Route>
                        <Route path="/home" exact>
                            {isLoading ? (
                                <div className={classes.tweetsCentred}><CircularProgress color="secondary" /></div>
                            ) : (
                                tweets.map(tweet => (
                                    <Tweet key={tweet._id} classes={classes} {...tweet}/>
                                ))
                            )}
                        </Route>
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
                        <Tags classes={classes} />
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