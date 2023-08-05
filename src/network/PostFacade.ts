import { AxiosResponse } from 'axios';

import ServerCommunicator from './ServerCommunicator';
import { PostListRequest } from '../request/Post';
import { IPost, IPostListRequest } from '../interfaces/post';


type body = {cityId: number, title: string}

class PostFacade {
    static post = 'post'

	// GET
	static async createNewPost<T>(post: body): Promise<AxiosResponse<T>> {
		const urlPath = `${this.post}/`;
        const data = { cityId: post.cityId, title: post.title }
		const response = await ServerCommunicator.doPostRequest<body, T>(urlPath, data);
        return response
	}

		// GET
		static async getPostsList(post: PostListRequest): Promise<IPost[]> {
			const urlPath = `${this.post}/list/posts`;
			const queryParams = { town: post.town, state: post.state }
			try{
				const posts = await ServerCommunicator.doGetRequest<IPost[], IPostListRequest>(urlPath, queryParams);
				return posts.data
			}
			catch(err){
				// console.error(err)
				return []
			}
		}

}

export default PostFacade;
