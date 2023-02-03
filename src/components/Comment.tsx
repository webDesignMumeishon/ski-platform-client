import { IComment } from '../interfaces/comments'
// ok
interface componentProps {
  comment: IComment
  replies: IComment[] | []
}

interface Reply {
  reply: IComment
}

const Replies = ({ reply }: Reply) => {
  return (
    <div className="reply-container">
      <div className="reply-photo">
        <img
          src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          alt="Photo"
        />
      </div>

      <div className="reply-content">
        <p>{reply.text}</p>
      </div>
    </div>
  )
}

const Comment = ({ comment, replies }: componentProps): JSX.Element => {
  return (
    <div className="comment-container">
      <div className="comment-content">
        <div className="comment-header">
          <p>
            <span>{comment.first_name}</span> commented on {comment.created_at}
          </p>
        </div>

        <div className="comment-main">{comment.text}</div>

        {replies.length > 0 &&
          replies.map((reply) => {
            return <Replies key={reply.id} reply={reply} />
          })}
      </div>
    </div>
  )
}

export default Comment
