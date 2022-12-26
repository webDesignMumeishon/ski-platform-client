import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import {IPost} from '../interfaces/post'
import SinglePost from "./SinglePost";
import PostService from "../service/PostService";

function Posts() {
    const [posts, setPosts] = useState<any>([])

    useEffect(() => {
        const getPosts = async () => {
            const response  = await PostService.getListPosts()
            const postsList = response.data
            setPosts(postsList)
        }
        getPosts()
    }, [])

    const postMappedList = posts.map((post : IPost) => {
        return <SinglePost post={post}/>
    })

    const logIn = async () => {

        try{
            const result = await axios.post(`http://localhost:4000/user/log-in`, 
                {
                    email: "tomas@mail.com",
                    password: "123455"
                },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
    
            if(result.status === 200){
                console.log(result.data)
                alert('Success')
            }
        }
        catch(err){
            alert('Failed to authenticate')
        }
    }


    return (
        <div className="posts-container">
            <button onClick={logIn}>LOG IN</button>
            {posts.length > 0 && postMappedList}
        </div>
    );
}

export default Posts;