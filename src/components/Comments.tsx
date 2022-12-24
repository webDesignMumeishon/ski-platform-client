import { useEffect, useState } from "react"
import axios, {AxiosResponse} from "axios"

import Comment from "./Comment"
import { IComment } from "../interfaces/comments"

type CommentsStateProps = [] | IComment[]

const Comments = () => {

    const [comments, setComments] = useState<CommentsStateProps>([])

    useEffect(() => {
        const getComments = async () => {
            const response : AxiosResponse<IComment[]> = await axios('http://localhost:3000/comment/')
            const comments = response.data
            setComments(comments)
        }
        getComments()
    }, [])

    if(comments !== null){
        return (
            <div>
    
                {comments.map((comment: IComment) => {
                    return <Comment title={comment.comment}/>
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