import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

import {IPost} from '../interfaces/post'
import SinglePost from "./SinglePost";

function Posts() {
    const [posts, setPosts] = useState<any>([])

    useEffect(() => {
        const getPosts = async () => {
            const response : AxiosResponse<any> = await axios('http://localhost:3000/post/list/posts')
            const postsList = response.data
            setPosts(postsList)
        }
        getPosts()
    }, [])

    const postMappedList = posts.map((post : IPost) => {
        return <SinglePost post={post}/>
    })

    return (
        <div className="posts-container">
            {posts.length > 0 && postMappedList}
        </div>
    );
}

export default Posts;