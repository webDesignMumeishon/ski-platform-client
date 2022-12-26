import { AxiosResponse } from 'axios';

import ServerFacade from "../network/ServerFacade";
import { IComment } from '../interfaces/comments';


class PostService {

	// GET
	static async getListPosts(): Promise<any> {
        return await ServerFacade.getPostsList();
	}

    static async getComments(postId: string): Promise<AxiosResponse<IComment[]>> {
        return await ServerFacade.getComments(postId);
	}
}

export default PostService;