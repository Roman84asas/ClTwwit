import {makeStyles, Theme} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: 'auto',
    },
    logo: {
        fontSize: 35,
    },
    sideMenuLists: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: '20px 0',
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
        '& a': {
            textDecoration: 'none',
            color: 'inherit',
        },
    },
    tweetsHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderRadius: 0,
        flex: 1,
        padding: '10px 10px',
        display: 'flex',
        '& h5': {
            fontWeight: 900,
        },
    },
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
    },
    fullTweet: {
        padding: 25,
    },
    fullTweetText: {
        fontSize: 24,
        lineHeight: 1.3,
        wordBreak: 'break-word',
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
        '& a': {
            textDecoration: 'none',
            color: 'inherit',
        },
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
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450,
    },
    tweetsCentred: {
        textAlign: 'center',
        marginTop: 50,
    },
    tweetContent: {
        flex: 1,
    }
}));