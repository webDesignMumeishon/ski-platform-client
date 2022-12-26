import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import {IPost} from '../interfaces/post'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import HTTP from "../eums/http";

type props = {
    post : IPost
}

function SinglePost({post} : props){
    const [likePost, setLikePost] = useState(0)
    const [numberLikes, setNumberLikes] = useState(0)

    const likePostHandler = async () => {
        try{
            if(likePost === 0 || likePost === null){
                const response = await axios.post(`http://localhost:4000/like/`, 
                    {
                        postId: post.id
                    },
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
        
                if(response.status === HTTP.STATUS_CREATED){
                    setLikePost(1)
                    setNumberLikes(() => (numberLikes + 1))
                }
    
            }
            else{
                const response = await axios.delete(`http://localhost:4000/like/${post.id}`,
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
        
                if(response.status === HTTP.STATUS_SUCCESS){
                    setLikePost(0)
                    setNumberLikes(() => (numberLikes - 1))
                }
            }
        }
        catch(err){
            alert(err)
        }


    }

    useEffect(() => {
        setLikePost(post.did_like)
        setNumberLikes(Number(post.number_likes))
    }, [])

    return (
        <div className="post-container">
            <div className="image-holder"><img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="Placerholder image" /></div>
            <div className="post-icon-likes" onClick={likePostHandler}>
                <KeyboardArrowUpRoundedIcon fontSize="large" style={{color: likePost === 1 ? 'red': '', marginBottom: '12px', cursor: 'pointer'}}/>
                <span className="text">{numberLikes}</span>         
            </div>
            <div className="post-title-container">
                <Link to={`post/${post.id}`}>{post.title}</Link>
                <p>{post.first_name} {post.last_name} · {post.number_comments} comments</p> 
            </div>
        </div>
    )
}

export default SinglePost