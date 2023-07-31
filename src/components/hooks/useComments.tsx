import { useEffect, useState } from "react"
import { CommentsStateProps } from "../Comments"


const useGetComments = (commentsResult: CommentsStateProps) => {
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
    }, []);

    return {parentComments, getCommentReplies, setParentComments, setComments}
}

export default useGetComments