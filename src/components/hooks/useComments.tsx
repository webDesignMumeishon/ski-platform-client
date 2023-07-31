import { useEffect, useState } from "react"
import { CommentsStateProps } from "../Comments"



const setParentsComments  = (comments: CommentsStateProps, setParentComments:  React.Dispatch<React.SetStateAction<CommentsStateProps>>) => {
    const filteredParentComments = comments.filter(comment => comment.parent === null) // parent can be either a number or null, if null it means it is a parent comment
    setParentComments(filteredParentComments);
}


const useGetComments = (commentsResult: CommentsStateProps) => {
    const [comments, setComments] = useState<CommentsStateProps>([]) // All comments here. Remember we can have child and parent comments
    const [parentComments, setParentComments] = useState<CommentsStateProps>([]) // Store parent comments

    const getCommentReplies = (parentCommentId : number | null) => { // Get child comments by passing parent comment
        return comments.filter(comment => {
            return comment.parent === parentCommentId
        })
    }

    useEffect(() => {
        setComments(commentsResult);
        setParentsComments(commentsResult, setParentComments)
    }, []);

    return {parentComments, getCommentReplies, setParentComments, setComments}
}

export default useGetComments