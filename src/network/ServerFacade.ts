import { AxiosResponse } from 'axios';
import { IComment } from '../interfaces/comments';

import { IPost } from '../interfaces/post';
import ServerCommunicator from './ServerCommunicator';

class ServerFacade {
    static post = 'post'

	// GET
	static async getPostsList(): Promise<AxiosResponse<IPost>> {
        
		const urlPath = `${this.post}/list/posts`;

		return await ServerCommunicator.doGetRequest<IPost>(urlPath);
	}

    //GET
    static async getComments(postId: string): Promise<AxiosResponse<IComment[]>> {

		const urlPath = `${this.post}/${postId}`;

		return await ServerCommunicator.doGetRequest<IComment[]>(urlPath);
	}

}

export default ServerFacade;
