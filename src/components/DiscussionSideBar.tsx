import { Box, Grid, Icon } from "@mui/material";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";

type Props = {
  numberLikes: number
  numberComments: number
}

function DiscussionSideBar({numberLikes, numberComments}: Props) {
  return (
    <Box className="side-bar-wrapper">
      <Grid container alignItems={"center"} direction={"column"} className="like-container" justifyContent={'center'}>

        <Grid container justifyContent={'space-between'} alignItems={'center'} className="item-container">
            <Grid item xs={2}>
              <Icon>
                <FcLike />
              </Icon>
            </Grid>
            <Grid item xs={2} textAlign={'center'}>{numberLikes ?? 0}</Grid>
            <Grid item xs={7}>Likes</Grid>
        </Grid>

        <Grid container justifyContent={'space-between'} alignItems={'center'} className="item-container">
            <Grid item xs={2}>
              <Icon>
                <FaRegCommentDots />
              </Icon>
            </Grid>
            <Grid item xs={2} textAlign={'center'}>{numberComments ?? 0}</Grid>
            <Grid item xs={7}>Comments</Grid>
        </Grid>

      </Grid>
    </Box>
  );
}

export default DiscussionSideBar;
