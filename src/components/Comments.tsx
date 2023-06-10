import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

import Comment from "./Comment"
import { IComment } from "../interfaces/comments"
import PostService from "../service/PostService";
import CreateComment from './CreateComment'
import DiscussionSideBar from "./DiscussionSideBar";

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

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState<CommentsStateProps>([])
    const [likes, setLikes] = useState<string>('')
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
                const {posts, likes: likesCount} = response.data
                const parentComments = posts.filter(comment => comment.parent === null)
                setParentComments(parentComments)
                setComments(comments)
                setLikes(likesCount)
            }
        }
        fetchData()
    }, [])

    if(parentComments !== null && parentComments.length > 0){
        return (
        <div className="discussion-bucket">
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
        </div>
        ) 
    }

    return (
        <CommentsWrapper setParentComments={setParentComments} postId={postId} hasComment={false}>
            <h1>No comments yet. Be the first to leave a comment!</h1>
        </CommentsWrapper>
    )
}


export default Comments