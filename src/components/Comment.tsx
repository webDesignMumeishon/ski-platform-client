import { IComment } from "../interfaces/comments"


type componentProps = {
    comment: IComment
    replies: IComment[] | []
}

const Comment = ({comment, replies} : componentProps) => {

    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt="Placeholder" />
            </div>

            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">
                        <div>:Bob Carroll:</div>
                        <div>{comment.createdAt}</div>
                    </div>
                    <div className="comment-text">{comment.comment}</div>
                </div>
            </div>  

            {replies.length > 0  && 
                <div className="replies">
                    {
                        replies.map(reply => {
                            return (
                                <Comment comment={reply} key={reply.id} replies={[]}/>
                            )
                        })
                    }
                </div>

            }       
        </div>
    )
}

export default Comment