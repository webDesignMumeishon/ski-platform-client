import { IComment } from "../interfaces/comments"


type componentProps = {
    comment: IComment
    replies: IComment[] | []
}

type Reply = {
    replies: IComment[] | []
}

const Replies =  ({replies} : Reply) => {
    return (
        <div className="reply-container">
            <div className="reply-photo">
                <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Photo" />
            </div>

            <div className="reply-content">
                <p>
                    {replies.map(reply => reply.text)}
                </p>
            </div>
        </div>
    )
}


const Comment = ({comment, replies} : componentProps) => {

    console.log(comment)

    return (
        <div className="comment-container">
            {/* <div className="comment-image-container">
                <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt="Placeholder" />
            </div> */}
            <div className="comment-content">
                <div className="comment-header">
                    <p><span>{comment.first_name}</span> commented on {comment.created_at}</p>
                </div>

                <div className="comment-main">
                    {comment.text}
                </div>

                {replies.length > 0 && <Replies replies={replies}/>}
                
            </div>
        </div>
    )
}

export default Comment