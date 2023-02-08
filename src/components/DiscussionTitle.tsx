import {IPost} from '../interfaces/post'

interface componentProps {
  post: IPost
}

function DiscussionTitle( {post} : componentProps) {

    return (
      <div className="discussion-title-container">
          <h1>{post.title}</h1>
      </div>
    );
  }
  
  export default DiscussionTitle;
  