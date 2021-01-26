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
import {
    Container,
    Typography,
    InputAdornment,
} from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import {Tags} from "../../components/Tags/Tags";
import {BackButton} from "../../components/BackButton/BackButton";
import {FullTweet} from "./components/FullTweet";
import {Users} from "../../components/Users";


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
                            <Route path="/home/tweet">
                                <Typography variant="h5">
                                    <BackButton classes={classes} />
                                    Твитнуть
                                </Typography>
                            </Route>
                            <Route path='/home/search' >
                                <Typography variant="h5">
                                    <BackButton classes={classes} />
                                    Твиты
                                </Typography>
                            </Route>
                            <Route path='/home' exact>
                                <Typography variant="h5">
                                    Главная
                                </Typography>
                            </Route>
                        </Paper>
                        <Route path={['/home', '/home/search']} exact>
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
                        <Route path="/home/tweet/:id" component={FullTweet} exact>
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
                        <Users />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
};