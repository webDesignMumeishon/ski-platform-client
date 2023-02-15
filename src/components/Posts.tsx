import {
    useLoaderData,
    LoaderFunctionArgs
} from "react-router-dom";

import {IPost} from '../interfaces/post'
import SinglePost from "./SinglePost";
import PostService from "../service/PostService";

export async function loader(context: LoaderFunctionArgs) : Promise<IPost[]> {
    if(typeof context.params.center === 'string' && typeof context.params.state === 'string'){
        const list = await PostService.getListPosts(context.params.center, context.params.state)
        return list.data;
    }
    return []
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