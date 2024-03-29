import { Grid, TextField} from "@mui/material";
import { useState } from "react";

import { IComment } from "../interfaces/comments"
import CommentService from '../service/CommentService'
import {CommentsStateProps} from './Comments'
import MainButton from "./Button";

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

        if(comment.length === 0){
            alert('Need to type something')
        }

        const {data} = await CommentService.createNewComment(props.postId, comment)
        const newComment : IComment = {
            id: data.id,
            created_at: data.created_at,
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
        setComment('')
    }

    return (
        <div>
            <Grid item sx={{}}>
                <TextField
                    sx={{width: "100%", margin: 'auto',display: 'flex', background: '#FFF', marginTop: '1%', marginBottom:'1em'}}
                    id="outlined-multiline-static"
                    multiline
                    label="Add comment!"
                    rows={5}
                    placeholder="Say something nice..."
                    value={comment}
                    onChange={handleComment}
                />
            </Grid>
            <Grid item>
                <MainButton callback={submitComment}>Comment</MainButton>
            </Grid>
        </div>
    )
}

export default CreateComment