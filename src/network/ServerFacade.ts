import { AxiosResponse } from 'axios';
import { IComment } from '../interfaces/comments';

import { IPost } from '../interfaces/post';
import ServerCommunicator from './ServerCommunicator';
import { IUserLogin, IUserLogged } from '../interfaces/user';



class ServerFacade {
    static post = 'post'
    static user = 'user'

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

	//POST
	static async userLogin(user: IUserLogin) : Promise<AxiosResponse<IUserLogged>> {

		const urlPath = `${this.user}/log-in`;

		return await ServerCommunicator.doPostRequest<IUserLogged, IUserLogin>(urlPath, user);
	}

}

export default ServerFacade;
