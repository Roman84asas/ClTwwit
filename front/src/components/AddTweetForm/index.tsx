import React from 'react';
import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from "@material-ui/core";
import {useHomeStyles} from "../../pages/Home";
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ImageOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import set = Reflect.set;

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): React.ReactElement => {
    const [text, setText] = React.useState<string>('');
    const textLimitPercent = Math.round((text.length/280)*100);
    const maxLength = MAX_LENGTH - text.length;

    const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget){
            setText(e.currentTarget.value);
        }
    };
    const handleClickAddTweet = (): void => {
        setText('');
    };

    return  (
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt={`Аватарка пользователя UserAvatar`}
                    src="https://pbs.twimg.com/profile_images/977608975771426816/0YqLd6K2_bigger.jpg"
                />
                <TextareaAutosize
                    onChange={handleChangeTextArea}
                    className={classes.addFormTextarea}
                    placeholder="Что происходит?"
                    value={text}
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
                    {text && (
                        <>
                            <span>{maxLength}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress
                                    variant="static"
                                    size={20}
                                    thickness={4}
                                    value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                    style={text.length >= MAX_LENGTH ? {color: 'red'} : undefined}
                                />
                                <CircularProgress
                                    style={{color: 'rgba(0,0,0,0.1)'}}
                                    variant="static"
                                    size={20}
                                    thickness={4}
                                    value={100}/>
                            </div>
                        </>
                    )}
                    <Button
                        onClick={handleClickAddTweet}
                        disabled={text.length >= MAX_LENGTH}
                        variant="contained"
                        color="primary">
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    )
};