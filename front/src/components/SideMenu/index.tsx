import React from "react";
import {Button, Hidden, IconButton, Typography} from "@material-ui/core";

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';
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
               <div>
                   <SearchIcon className={classes.sideMenuListItemIcon}/>
                   <Hidden smDown>
                       <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                           Поиск
                       </Typography>
                   </Hidden>
               </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                            Уведомления
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                            Сообщения
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                            Закладки
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListAltIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                            Список
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <PersonIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                            Профиль
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button className={classes.sideMenuTweetButton} variant="contained" color="primary" fullWidth>
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
            </li>
        </ul>
    )
};