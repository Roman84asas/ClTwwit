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
               <div>
                   <SearchIcon className={classes.sideMenuListItemIcon}/>
                   <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                       Поиск
                   </Typography>
               </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsNoneIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                        Уведомления
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MailOutlineIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                        Сообщения
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkBorderIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                        Закладки
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListAltIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                        Список
                    </Typography>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <PersonIcon className={classes.sideMenuListItemIcon}/>
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                        Профиль
                    </Typography>
                </div>
            </li>
        </ul>
    )
};