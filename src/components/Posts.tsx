import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import {IPost} from '../interfaces/post'
import SinglePost from "./SinglePost";
import PostService from "../service/PostService";
import UserService from "../service/UserService";

function Posts() {
    const [posts, setPosts] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            const response  = await PostService.getListPosts()
            const postsList = response.data
            setPosts(postsList)
        }
        fetchData()
    }, [])

    const postMappedList = posts.map((post : IPost) => {
        return <SinglePost post={post}/>
    })

    const logIn = async () => {
        try{
            const result = await UserService.userLogin()
    
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