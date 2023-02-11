import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

import Comment from "./Comment"
import { IComment } from "../interfaces/comments"
import PostService from "../service/PostService";

type CommentsStateProps = [] | IComment[]

const Comments = () => {

    const { postId} = useParams();
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
    }, [])

    console.log(comments)

    if(comments !== null && comments.length > 0){
        return (
            <div className="comments-container">
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
            </div>
        ) 
    }

    return (
        <div>
            <h1>No Comments</h1>
        </div>
    )
}


export default Comments