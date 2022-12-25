import { Link } from "react-router-dom";
import {IPost} from '../interfaces/post'

type props = {
    post : IPost
}

function SinglePost({post} : props){

    return (
        <div className="post-container">
            <div className="image-holder"><img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="Placerholder image" /></div>
            <div className="post-icon-likes">Icon</div>
            <div className="post-title-container">
                <Link to={`post/${post.id}`}>{post.title}</Link>
                <p>Max20 · 0 comments</p> 
            </div>
        </div>
    )
}

export default SinglePost