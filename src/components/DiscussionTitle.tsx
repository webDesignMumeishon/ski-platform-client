import {IPost} from '../interfaces/post'
import {getFullDate} from '../utils/getDate'

interface componentProps {
  post: IPost
}

function DiscussionTitle( {post} : componentProps) {




    return (
      <div className="discussion-title-container">
          <h1>{post.title}</h1>
          <p>{post.first_name} {post.last_name} asked this question on <span>{getFullDate(post.created_at)}</span></p>
      </div>
    );
  }
  
  export default DiscussionTitle;
  