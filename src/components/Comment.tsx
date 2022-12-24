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
            <div className="comment-text">
                {comment.comment}
            </div>
        </div>
    )
}

export default Comment