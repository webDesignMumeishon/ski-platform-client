import { useEffect, useState } from "react";

import {IPost} from '../interfaces/post'
import SinglePost from "./SinglePost";
import PostService from "../service/PostService";

function Posts() {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response  = await PostService.getListPosts()
            const postsList = response.data
            setPosts(postsList)
        }
        fetchData()
    }, [])

    const postMappedList = posts.map((post : IPost) => {
        return <SinglePost key={post.id} post={post}/>
    })

    return (
        <div className="posts-container">
            {posts.length > 0 && postMappedList}
        </div>
    );
}

export default Posts;