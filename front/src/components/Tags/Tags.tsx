import React from "react";
import { Divider, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import { useHomeStyles } from '../../pages/Home/theme';
import {useSelector} from "react-redux";
import {selectTagsItems} from "../../store/tags/selectors";


interface TagsProperty {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProperty> = ({classes}: TagsProperty): React.ReactElement => {
    const items = useSelector(selectTagsItems);

    return(
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} >
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {
                    items.map((obj)=>(
                        <>
                            <ListItem key={obj._id} className={classes.rightSideBlockItem}>
                                <ListItemText
                                    primary={obj.name}
                                    secondary={
                                        <Typography component="span" variant="body2">
                                            Твитов: {obj.count}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <Divider component='li' />
                        </>
                    ))
                }
            </List>
        </Paper>
    )
};