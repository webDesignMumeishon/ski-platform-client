import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { Grid } from "@mui/material";

import Comments from "./Comments";
import DiscussionTitle from "./DiscussionTitle";
import PostService from "../service/PostService";
import { IComment, ICommentAndLike } from "../interfaces/comments";

export async function loader(
  context: LoaderFunctionArgs
): Promise<ICommentAndLike> {
  if (typeof context.params.postId === "string") {
    const post = await PostService.getComments(context.params.postId);
    return post.data;
  }
  return {
    post: {
      first_name: "",
      last_name: "",
      created_at: new Date(),
    },
    comments: [],
    likes: "0",
  };
}

export type CommentsStateProps = [] | IComment[];

function Discussion() {
  const post = useLoaderData() as unknown as ICommentAndLike;

  return (
    <Grid container>
      <DiscussionTitle post={post.post} />
      <Comments likes={post.likes} commentsResult={post.comments} />
    </Grid>
  );
}

export default Discussion;
