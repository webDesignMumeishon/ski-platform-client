import { useState } from 'react'

import { IComment } from '../interfaces/comments'
import {getFullDate} from '../utils/getDate'
import { CommentsStateProps } from './Comments';
import CreateCommentReply from './CreateCommentReply';

interface componentProps {
  comment: IComment
  index: number
  replies: IComment[] | []
  setComments: React.Dispatch<React.SetStateAction<CommentsStateProps>>
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

const Comment = ({ comment, replies, index, setComments }: componentProps): JSX.Element => {

  const [showReply, setShowReply] = useState<boolean>(false)

  const handleShowReply = () => {
    setShowReply(!showReply)
  }
  const isFirstComment = index === 0

  function compareFn(a: IComment, b: IComment) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  } 

  replies.sort(compareFn)


  return (
    <div className="comment-container" style={{paddingTop: isFirstComment ? '0px' : ''}}>
      <div className="comment-content">
        <div className="comment-header">
          <p>
            <span>{comment.first_name}</span> commented on {getFullDate(new Date(comment.created_at))}
          </p>
        </div>

        <div className="comment-main">
          <p>{comment.text}</p>
        </div>


        {replies.length > 0 &&
          replies.map((reply) => {
            return <Replies key={reply.id} reply={reply} />
          })
        }

        {
          showReply
          ?
          <CreateCommentReply parentId={comment.id} handleShowReply={handleShowReply} setComments={setComments}/>
          :
          <button onClick={handleShowReply}>Reply</button>
        }
      </div>
    </div>
  )
}



export default Comment
