import { AxiosResponse } from 'axios';

import ServerFacade from "../network/ServerFacade";
import { IComment } from '../interfaces/comments';
import { IPost } from '../interfaces/post';


class PostService {

	// GET
	static async getListPosts(): Promise<AxiosResponse<IPost[]>> {
        return await ServerFacade.getPostsList<IPost[]>();
	}

	// GET
    static async getComments(postId: string): Promise<AxiosResponse<IComment[]>> {
        return await ServerFacade.getComments<IComment[]>(postId);
	}
}

export default PostService;