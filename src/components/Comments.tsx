import { useParams } from 'react-router-dom';

import Comment from "./Comment"
import { IComment } from "../interfaces/comments"
import CreateComment from './CreateComment'
import DiscussionSideBar from "./DiscussionSideBar";
import { Grid } from "@mui/material";
import Title from "./Title";
import useGetComments from './hooks/useComments';

export type CommentsStateProps = [] | IComment[]

interface ComponentProps {
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

    const {parentComments, getCommentReplies, setParentComments, setComments} = useGetComments(commentsResult)

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
            <Title>No comments yet. Be the first to leave a comment!</Title>
        </CommentsWrapper>
    )
}


export default Comments