import React, {useState} from "react"
import {storeCommentToMovie} from "../../../utils/requests"
import "./NewComment.scss";
import SendIcon from "@mui/icons-material/Send"
import {Box, Button} from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

interface props {
    movieID: number,
    refreshComments: () => void
}

export default function AddNewComment({movieID, refreshComments}: props) {
    const [comment, setComment] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (comment.length == 0) {
            alert("comment cannot be empty.")
            return;
        }
        storeCommentToMovie(movieID, comment).then(() => {
            refreshComments();
            setComment("")
        }).catch(err => {
            alert(err.response.data.errors)
        })
    }

    const addEmoji = (emoji: string) => {
        setComment(`${comment}${emoji}`);
    }

    return <div className={"newContent"}>
        <div className={"textarea"}>
            <label htmlFor={"comment"}>Comment</label>
            <Textarea
                placeholder="Type in here your comment."
                value={comment}
                className={"comment"}
                onChange={(event: any) => setComment(event.target.value)}
                minRows={2}
                maxRows={4}
                startDecorator={
                    <Box sx={{display: 'flex', gap: 0.5}}>
                        <IconButton variant="outlined" color="neutral" onClick={() => addEmoji('👍')}>
                            👍
                        </IconButton>
                        <IconButton variant="outlined" color="neutral" onClick={() => addEmoji('😍')}>
                            😍
                        </IconButton>
                    </Box>
                }
                endDecorator={
                    <Typography level="body3" sx={{ml: 'auto'}}>
                        {comment.length} character(s)
                    </Typography>
                }
                sx={{minWidth: 300}}/>
        </div>
        <Button variant="contained" endIcon={<SendIcon/>} onClick={handleSubmit}>
            Send
        </Button>
    </div>
}