import IComment from "../../../utils/IComment";
import React from "react";
import Grid from "@mui/material/Grid";
import {Avatar, Box, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import {deleteComment} from "../../../utils/requests";

interface props {
    comments: IComment[],
    refreshComments: () => void
}

export default function Comment({comments, refreshComments}: props) {

    const handleDelete = (id: number) => {
        deleteComment(id).then(() => {
            refreshComments();
        })
    }

    return <Box sx={{flexGrow: 1, maxWidth: 752}}>
        <Grid item>
            <List dense={false}>
                {
                    comments.map(comment => {
                        return <ListItem key={comment.id}
                                         secondaryAction={
                                             <IconButton onClick={() => handleDelete(comment.id)} edge="end"
                                                         aria-label="delete">
                                                 <DeleteIcon/>
                                             </IconButton>
                                         }>
                            <ListItemAvatar>
                                <Avatar>
                                    <Avatar src="/broken-image.jpg"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={comment.comment}
                            />
                        </ListItem>
                    })
                }

            </List>
        </Grid>
    </Box>
}