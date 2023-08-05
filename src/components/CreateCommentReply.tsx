import { useParams } from "react-router-dom";
import { useState } from "react";
import { ImReply, ImCancelCircle } from "react-icons/im";
import { Box, IconButton } from "@mui/material";

import CommentService from "../service/CommentService";
import { CommentsStateProps } from "./Comments";
import { IComment } from "../interfaces/comments";
import CheckLogin from "./CheckLogin";

interface ReplyProps {
  parentId: number;
  handleShowReply: () => void;
  setComments: React.Dispatch<React.SetStateAction<CommentsStateProps>>;
}

const CreateCommentReply = (props: ReplyProps) => {
  const [comment, setComment] = useState("");
  const { postId } = useParams();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (postId !== undefined) {
      const newReply = await CommentService.createNewReply(
        postId,
        comment,
        props.parentId
      );
      props.setComments((state: IComment[]) => {
        return [...state, newReply.data];
      });
      props.handleShowReply();
    }
    setComment("");
  };

  return (
    <CheckLogin>
      <form onSubmit={handleSubmit} action="" className="comment-reply-wrapper">
        <IconButton
          className="comment-reply-cancel"
          style={{ padding: "0" }}
          onClick={props.handleShowReply}
        >
          <ImCancelCircle />
        </IconButton>
        <Box className="comment-reply">
          <input
            className="comment-reply-input"
            placeholder={"Write a comment"}
            value={comment}
            onChange={handleChange}
          />
          <IconButton aria-label="Reply" type="submit">
            <ImReply />
          </IconButton>
        </Box>
      </form>
    </CheckLogin>
  );
};

export default CreateCommentReply;
