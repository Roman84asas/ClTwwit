import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams} from 'react-router-dom';
import format from 'date-fns/format'
import ruLang from "date-fns/locale/ru";

import {useHomeStyles} from "../theme";
import {fetchTweetData, setTweetData} from "../../../store/ducks/tweet/actionCreators";
import {selectTweetData} from "../../../store/ducks/tweet/selectors";
import {selectIsTweetLoading} from "../../../store/ducks/tweet/selectors";

import Paper from "@material-ui/core/Paper/Paper";
import classNames from "classnames";
import {Avatar, IconButton, Typography} from "@material-ui/core";
import ChatIcon from "@material-ui/core/SvgIcon/SvgIcon";
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/PresentToAllOutlined';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";


export const FullTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading);
    const params: {id?: string} = useParams();
    const id = params.id;

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }
        return () => {
            dispatch(setTweetData(undefined));
        }
    }, [dispatch, id]);

    if (isLoading) {
        return <div className={classes.tweetsCentred}><CircularProgress color="secondary" /></div>;
    }

    if (tweetData) {
        return <Paper variant="outlined" className={classes.fullTweet}>
                <div className={classNames(classes.tweetsHeaderUser)}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt={`Аватарка пользователя ${tweetData.user.fullname}`}
                        src={tweetData.user.avatar}
                        style={{marginRight: 25}}
                    />
                    <Typography >
                        <b>{tweetData.user.fullname} </b>
                        <div>
                            <span className={classes.tweetUserName}>@{tweetData.user.username}</span>
                        </div>
                    </Typography>
                </div>
            <Typography className={classes.fullTweetText} gutterBottom>
                {tweetData.text}
            </Typography>
            <div>
                <span className={classes.tweetUserName}> {format(new Date(tweetData.createdAt), 'H:mm', {locale: ruLang})} · </span>
                <span className={classes.tweetUserName}> {format(new Date(tweetData.createdAt), 'dd MMM yyyy г.', {locale: ruLang})}</span>
            </div>
            <div className={classes.tweetFooter}>
                <div>
                    <IconButton color="primary">
                        <ChatIcon style={{ fontSize: 20}}/>
                    </IconButton>
                    <span style={{ fontSize: 14, marginLeft: 5 }}>1</span>
                </div>
                <div>
                    <IconButton color="primary">
                        <RepeatIcon style={{ fontSize: 20}}/>
                    </IconButton>
                    <span style={{ fontSize: 14, marginLeft: 5 }}>1</span>
                </div>
                <div>
                    <IconButton color="primary">
                        <LikeIcon style={{ fontSize: 20}}/>
                    </IconButton>
                    <span style={{ fontSize: 14, marginLeft: 5 }}>1</span>
                </div>
                <div>
                    <IconButton color="primary">
                        <ShareIcon style={{ fontSize: 20}}/>
                    </IconButton>
                    <span style={{ fontSize: 14, marginLeft: 5 }}>1</span>
                </div>
            </div>
            </Paper>
    }
    return null;
};