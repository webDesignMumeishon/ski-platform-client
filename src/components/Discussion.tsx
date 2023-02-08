import Comments from "./Comments";
import DiscussionSideBar from "./DiscussionSideBar";
import DiscussionTitle from "./DiscussionTitle";
import PostService from "../service/PostService";
import {IPost} from '../interfaces/post'
import {
  useLoaderData,
} from "react-router-dom";

export async function loader(context: any) : Promise<IPost> {
  const post = await PostService.getSinglePost(context.params.postId)
  return post.data;
}

function Discussion() {
  const post = (useLoaderData() as IPost);

  return (
    <div className="discussion-container">
      <DiscussionTitle post={post} />
      <div className="discussion-bucket">
        <Comments />
        <DiscussionSideBar />
      </div>
    </div>
  );
}

export default Discussion;
