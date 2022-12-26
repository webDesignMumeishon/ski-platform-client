import { Link } from "react-router-dom";
import {IPost} from '../interfaces/post'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

type props = {
    post : IPost
}

function SinglePost({post} : props){

    return (
        <div className="post-container">
            <div className="image-holder"><img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="Placerholder image" /></div>
            <div className="post-icon-likes" onClick={console.log}>
                <KeyboardArrowUpRoundedIcon fontSize="large" style={{color: post.isincluded === 1 ? '#e6375a': '', marginBottom: '12px', cursor: 'pointer'}}/>
                <span className="text">{post.number_likes}</span>         
            </div>
            <div className="post-title-container">
                <Link to={`post/${post.id}`}>{post.title}</Link>
                <p>{post.first_name} {post.last_name} · {post.number_comments} comments</p> 
            </div>
        </div>
    )
}

export default SinglePost