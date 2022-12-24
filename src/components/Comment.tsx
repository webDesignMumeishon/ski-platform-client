import { IComment } from "../interfaces/comments"


type componentProps = {
    comment: IComment
    replies: IComment[] | []
}

const Comment = ({comment} : componentProps) => {

    return (
        <div className="comment">
            This is a single comment
            <p>{comment.comment}</p>
            
        </div>
    )
}

export default Comment