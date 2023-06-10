import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

import Comment from "./Comment"
import { IComment } from "../interfaces/comments"
import CreateComment from './CreateComment'
import DiscussionSideBar from "./DiscussionSideBar";
import { Grid } from "@mui/material";

export type CommentsStateProps = [] | IComment[]

interface ComponentProps{
    setParentComments: any
    children: JSX.Element
    postId: string | undefined
    hasComment: boolean
}

const CommentsWrapper = (props: ComponentProps) => {
    const withPseudoElement = 'comments-container'
    const withoutPseudoElement = 'comments-container-no-pseudo'
    return (
        <div className={props.hasComment ? withPseudoElement : withoutPseudoElement}>
            {props.children}
            {props.postId !== undefined ? 
                <CreateComment postId={props.postId} setParentComments={props.setParentComments}/> 
                : 
                null
            }
        </div>
    )
}

type ElementProps = {
    likes: string,
    commentsResult: CommentsStateProps
}

const Comments = ({likes, commentsResult}: ElementProps) => {
    const {postId} = useParams();
    const filteredComments = commentsResult.filter(comment => comment.parent === null)
    const [comments, setComments] = useState<CommentsStateProps>([])
    const [parentComments, setParentComments] = useState<CommentsStateProps>([])

    const getCommentReplies = (parentCommentId : number | null) => {
        return comments.filter(comment => {
            return comment.parent === parentCommentId
        })
    }

    useEffect(() => {
        setComments(commentsResult);
        setParentComments(filteredComments);
      }, [commentsResult, filteredComments]);

    if(parentComments !== null && parentComments.length > 0){
        return (
        <Grid container justifyContent={'space-between'}>
            <CommentsWrapper setParentComments={setParentComments} postId={postId} hasComment={true}>
                <>
                {parentComments.map((comment: IComment, index : number) => {
                    return (
                        <Comment 
                            key={comment.id}
                            index={index}  
                            comment={comment} 
                            replies={getCommentReplies(comment.id)}
                            setComments={setComments}
                        />
                    )
                })}
                </>
            </CommentsWrapper>
            <DiscussionSideBar numberComments={parentComments.length} numberLikes={likes}/>
        </Grid>
        ) 
    }

    return (
        <CommentsWrapper setParentComments={setParentComments} postId={postId} hasComment={false}>
            <h1>No comments yet. Be the first to leave a comment!</h1>
        </CommentsWrapper>
    )
}


export default Comments