import { useEffect, useState } from "react"
import axios, {AxiosResponse} from "axios"

import Comment from "./Comment"
import { IComment } from "../interfaces/comments"

type CommentsStateProps = [] | IComment[]

const Comments = () => {

    const [comments, setComments] = useState<CommentsStateProps>([])
    const [parentComments, setParentComments] = useState<CommentsStateProps>([])

    const getCommentReplies = (parentCommentId : number | null) => {
        return comments.filter(comment => {
            return comment.parent === parentCommentId
        })
    }

    useEffect(() => {
        const getComments = async () => {
            const response : AxiosResponse<IComment[]> = await axios('http://localhost:3000/comment/')
            const comments = response.data
            const parentComments = comments.filter(comment => comment.parent === null)
            setParentComments(parentComments)
            setComments(comments)
        }
        getComments()
    }, []) //trigger only once after mounting component

    if(comments !== null){
        return (
            <div className="comments">
                <h3 className="comments-title">This is a title</h3>
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