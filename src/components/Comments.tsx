import { useEffect, useState } from "react"
import axios, {AxiosResponse} from "axios"
import { useParams } from 'react-router-dom';

import Comment from "./Comment"
import { IComment } from "../interfaces/comments"
import PostService from "../service/PostService";

type CommentsStateProps = [] | IComment[]

const Comments = () => {

    let { postId } = useParams();
    const [comments, setComments] = useState<CommentsStateProps>([])
    const [parentComments, setParentComments] = useState<CommentsStateProps>([])

    const getCommentReplies = (parentCommentId : number | null) => {
        return comments.filter(comment => {
            return comment.parent === parentCommentId
        })
    }

    useEffect(() => {
        const getComments = async () : Promise<void> => {
            if(postId !== undefined){
                const response = await PostService.getComments(postId)
                const comments = response.data
                const parentComments = comments.filter(comment => comment.parent === null)
                setParentComments(parentComments)
                setComments(comments)
            }
        }
        getComments()
    }, []) //trigger only once after mounting component

    if(comments !== null){
        return (
            <div className="comments-container">
                {parentComments.map((comment: IComment) => {
                    return (
                        <Comment 
                            key={comment.id}  
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