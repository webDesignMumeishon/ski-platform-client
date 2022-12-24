import { useEffect, useState } from "react"
import axios from "axios"

import Comment from "./Comment"
import { IComment } from "../interfaces/comments"

const Comments = () => {

    const [comments, setComments] = useState<any>(null)

    useEffect(() => {
        const getComments = async () => {
            const {data} = await axios('http://localhost:3000/comment/')
            setComments(data)
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
    console.log(3, 'withOutComments')

    return (
        <div>
            <h1>No Comments</h1>
        </div>
    )


}


export default Comments