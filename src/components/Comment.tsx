import { useState } from 'react'
import { Grid } from '@mui/material';


import { IComment } from '../interfaces/comments'
import {getFullDate} from '../utils/getDate'
import { CommentsStateProps } from './Comments';
import CreateCommentReply from './CreateCommentReply';
import Reply from './Reply';

type Props = {
  comment: IComment
  index: number
  replies: IComment[] | []
  setComments: React.Dispatch<React.SetStateAction<CommentsStateProps>>
}

const Comment = ({ comment, replies, index, setComments }: Props): JSX.Element => {

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
    <Grid container className="comment-container" style={{paddingTop: isFirstComment ? '0px' : ''}}>
      <Grid className="comment-content" xs={12}>
        <Grid item  xs={12} className="comment-header">
          <p>
            <span>{comment.first_name}</span> commented on {getFullDate(new Date(comment.created_at))}
          </p>
        </Grid>

        <Grid xs={12} item className="comment-main">
          <p>{comment.text}</p>
        </Grid>

        {replies.length > 0 &&
          replies.map((reply) => {
            return <Reply key={reply.id} reply={reply} />
          })
        }

        {
          showReply
          ?
          <CreateCommentReply parentId={comment.id} handleShowReply={handleShowReply} setComments={setComments}/>
          :
          <button className='button-generic' onClick={handleShowReply}>Reply</button>
        }
      </Grid>
    </Grid>
  )
}



export default Comment
