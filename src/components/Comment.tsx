import { IComment } from "../interfaces/comments"


type componentProps = {
    comment: IComment
    replies: IComment[] | []
}

const Comment = ({comment, replies} : componentProps) => {

    return (
        <div className="comment-container">
            {/* <div className="comment-image-container">
                <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" alt="Placeholder" />
            </div> */}
            <div className="comment-content">
                <div className="comment-header">
                    <h3>dougwilson commented on Sep 12, 2015</h3>
                </div>

                <div className="comment-main">
                    {comment.comment}
                </div>
            </div>
        </div>
    )
}

export default Comment