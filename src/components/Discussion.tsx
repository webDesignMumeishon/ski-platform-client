import {
  useLoaderData,
  LoaderFunctionArgs,
} from "react-router-dom";

import Comments from "./Comments";
import DiscussionTitle from "./DiscussionTitle";
import PostService from "../service/PostService";
import {IPost} from '../interfaces/post'

export async function loader(context: LoaderFunctionArgs) : Promise<IPost> {
  if(typeof context.params.postId === 'string'){
    const post = await PostService.getSinglePost(context.params.postId)
    return post.data;
  }
  return {
    id: 0,
    user_id: 0,
    title: '',
    created_at: new Date(),
    number_comments: '',
    number_likes: '',
    first_name: '',
    last_name: '',
    did_like: 0,
  }
}

function Discussion() {
  const post = (useLoaderData() as  unknown as IPost);

  return (
    <div className="discussion-container">
      <DiscussionTitle post={post} />
      <Comments />
    </div>
  );
}

export default Discussion;
