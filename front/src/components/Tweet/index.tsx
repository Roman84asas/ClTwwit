import React from "react";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import {Avatar, IconButton, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import ChatIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/PresentToAllOutlined';
import { useHomeStyles } from '../../pages/Home';


interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatar: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({text, classes, user}: TweetProps): React.ReactElement => {
    return(
        <Paper variant="outlined" className={classNames(classes.tweet, classes.tweetsHeader)}>
            <Avatar
                className={classes.tweetAvatar}
                alt={`Аватарка пользователя ${user.fullname}`}
                src={user.avatar}
                style={{marginRight: 25}}
            />
                <div>
                    <Typography >
                        <b>{user.fullname} </b>
                        <span className={classes.tweetUserName}>@{user.username}</span>
                        <span className={classes.tweetUserName}> · </span>
                        <span className={classes.tweetUserName}> 1 ч.</span>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
                    </Typography>
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
                </div>

        </Paper>
    )
};