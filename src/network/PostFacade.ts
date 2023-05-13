import { AxiosResponse } from 'axios';

import ServerCommunicator from './ServerCommunicator';


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

}

export default PostFacade;
