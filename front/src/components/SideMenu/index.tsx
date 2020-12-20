import React from "react";
import {IconButton, Typography} from "@material-ui/core";

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import {useHomeStyles} from "../../pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    return (
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
    )
};