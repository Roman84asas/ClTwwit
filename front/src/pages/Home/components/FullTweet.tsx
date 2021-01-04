import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

import {useHomeStyles} from "../theme";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

import {Tweet} from "../../../components/Tweet";

import {fetchTweetData} from "../../../store/ducks/tweet/actionCreators";
import {selectTweetData} from "../../../store/ducks/tweet/selectors";
import {selectIsTweetLoading} from "../../../store/ducks/tweet/selectors";




export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const params: {id?: string} = useParams();
    const id = params.id;
    const isLoading = useSelector(selectIsTweetLoading);

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        return <div className={classes.tweetsCentred}><CircularProgress color="secondary" /></div>;
    }
    if (tweetData) {
        return<Tweet classes={classes} {...tweetData}/>;
    }
    return null;
};