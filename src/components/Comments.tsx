import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

import Comment from "./Comment"
import { IComment } from "../interfaces/comments"
import PostService from "../service/PostService";
import CreateComment from './CreateComment'

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
            {props.postId !== undefined ? <CreateComment postId={props.postId} setParentComments={props.setParentComments}/> : null}
        </div>
    )
}

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState<CommentsStateProps>([])
    const [parentComments, setParentComments] = useState<CommentsStateProps>([])

    const getCommentReplies = (parentCommentId : number | null) => {
        return comments.filter(comment => {
            return comment.parent === parentCommentId
        })
    }

    useEffect(() => {
        const fetchData = async () : Promise<void> => {
            if(postId !== undefined){
                const response = await PostService.getComments(postId)
                const comments = response.data
                const parentComments = comments.filter(comment => comment.parent === null)
                setParentComments(parentComments)
                setComments(comments)
            }
        }
        fetchData()
    }, [comments])

    if(comments !== null && comments.length > 0){
        return (
            <CommentsWrapper setParentComments={setParentComments} postId={postId} hasComment={true}>
                <>
                {parentComments.map((comment: IComment, index : number) => {
                    return (
                        <Comment 
                            key={comment.id}
                            index={index}  
                            comment={comment} 
                            replies={getCommentReplies(comment.id)}
                        />
                    )
                })}
                </>
            </CommentsWrapper>
        ) 
    }

    return (
        <CommentsWrapper setParentComments={setParentComments} postId={postId} hasComment={false}>
            <h1>No comments yet. Be the first to leave a comment!</h1>
        </CommentsWrapper>
    )
}


export default Comments