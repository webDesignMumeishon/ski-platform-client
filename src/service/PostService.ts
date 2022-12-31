import { AxiosResponse } from 'axios';

import ServerFacade from "../network/ServerFacade";
import { IComment } from '../interfaces/comments';
import { IPost } from '../interfaces/post';
import { PostListRequest } from '../request/Post';


class PostService {

	// GET
	static async getListPosts(city: string, state: string): Promise<AxiosResponse<IPost[]>> {

		const bodyRequest = new PostListRequest(city, state)

        return await ServerFacade.getPostsList<IPost[]>(bodyRequest);
	}

	// GET
    static async getComments(postId: string): Promise<AxiosResponse<IComment[]>> {
        return await ServerFacade.getComments<IComment[]>(postId);
	}
}

export default PostService;