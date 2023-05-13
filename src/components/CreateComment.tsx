import { Grid, TextField} from "@mui/material";
import { useState } from "react";

import { IComment } from "../interfaces/comments"
import CommentService from '../service/CommentService'
import {CommentsStateProps} from './Comments'

type Props = {
    postId: string
    setParentComments: React.Dispatch<React.SetStateAction<CommentsStateProps>>
}

const CreateComment = (props: Props) => {
    const [comment, setComment] = useState<string>('')

    const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setComment(value)
    }

    const submitComment = async () => {
        const {data} = await CommentService.createNewComment(props.postId, comment)
        const newComment : IComment = {
            id: data.id,
            created_at: data.createdAt,
            parent: data.parent,
            text: data.text,
            first_name: data.first_name,
            last_name: data.last_name
        } 
        props.setParentComments((state: CommentsStateProps) => {
            return [
                ...state,
                newComment
            ]
        })
    }

    return (
        <div>
            <Grid item sx={{}}>
                <TextField
                    sx={{width: "100%", margin: 'auto',display: 'flex'}}
                    id="outlined-multiline-static"
                    multiline
                    label="Ask something!"
                    rows={5}
                    placeholder="Create a great post today..."
                    value={comment}
                    onChange={handleComment}
                />
            </Grid>
            <Grid item>
                <button onClick={submitComment}>Comment</button>
            </Grid>
        </div>
    )
}

export default CreateComment