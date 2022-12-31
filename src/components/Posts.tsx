import {
    useLoaderData,
} from "react-router-dom";

import {IPost} from '../interfaces/post'
import SinglePost from "./SinglePost";
import PostService from "../service/PostService";

export async function loader() : Promise<IPost[]> {
    const list = await PostService.getListPosts()
    return list.data;
}

function Posts() {
    const list = (useLoaderData() as IPost[]);

    const postMappedList = list.map((post : IPost) => {
        return <SinglePost key={post.id} post={post}/>
    })

    return (
        <div className="posts-container">
            {postMappedList}
        </div>
    );
}

export default Posts;