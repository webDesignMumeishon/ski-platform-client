import Comments from './Comments';
import DiscussionSideBar from './DiscussionSideBar';
import DiscussionTitle from './DiscussionTitle';


function Discussion() {
  return (
    <div className='discussion-container'>
        <DiscussionTitle/>
        <div className='discussion-bucket'>
            <Comments/>
            <DiscussionSideBar/>
        </div>
    </div>
  );
}

export default Discussion;
