import { AxiosResponse } from 'axios';

import ServerFacade from "../network/ServerFacade";
import { IComment } from '../interfaces/comments';
import { IPost } from '../interfaces/post';
import { PostListRequest, SinglePostRequest } from '../request/Post';
import PostFacade from '../network/PostFacade';

class PostService {

	// GET
	static async getListPosts(city: string, state: string): Promise<AxiosResponse<IPost[]>> {
		const bodyRequest = new PostListRequest(city, state)
        return await ServerFacade.getPostsList<IPost[]>(bodyRequest);
	}

	// GET
	static async getSinglePost(id: string): Promise<AxiosResponse<IPost>> {
		const paramRequest = new SinglePostRequest(id)
        return await ServerFacade.getSinglePost<IPost>(paramRequest);
	}

	// GET
    static async getComments(postId: string): Promise<AxiosResponse<IComment[]>> {
        return await ServerFacade.getComments<IComment[]>(postId);
	}

	// POST
	static async createNewPost(cityId: number, title: string): Promise<AxiosResponse<IPost>> {
		const bodyRequest = {cityId: cityId, title}
		return await PostFacade.createNewPost<any>(bodyRequest);
	}
}

export default PostService;