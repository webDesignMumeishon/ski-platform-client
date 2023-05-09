import {
    useLoaderData,
    LoaderFunctionArgs
} from "react-router-dom";

import {IPost} from '../interfaces/post'
import SinglePost from "./SinglePost";
import EmptyPost from "./EmptyPost";
import PostService from "../service/PostService";


export async function loader(context: LoaderFunctionArgs) : Promise<IPost[]> {
    if(typeof context.params.town === 'string' && typeof context.params.state === 'string'){
        const list = await PostService.getListPosts(context.params.town, context.params.state)
        return list.data;
    }
    return []
}

function Posts() {
    const list = (useLoaderData() as IPost[]);

    const postMappedList = list.map((post : IPost) => {
        return <SinglePost key={post.id} post={post}/>
    })

    if(list.length === 0){
        return <EmptyPost/>
    }

    return (
        <div className="posts-container">
            {postMappedList}
        </div>
    );
}

export default Posts;