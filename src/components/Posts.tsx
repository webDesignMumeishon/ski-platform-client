import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Posts() {

    const [posts, setPosts] = useState<any>([])

    useEffect(() => {
        const getPosts = async () => {
            // const response : AxiosResponse<IComment[]> = await axios('http://localhost:3000/post/1')
            const response : AxiosResponse<any> = await axios('http://localhost:3000/post/list/posts')
            const postsList = response.data
            setPosts(postsList)
        }
        getPosts()
    }, [])


    return (
        <div>
            list of posts
            {posts.length > 0 &&
                posts.map((post : any) => {
                    return (
                        <div>
                            <Link to={`post/${post.city_id}`}>{post.title}</Link>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Posts;