import { AxiosResponse } from 'axios';

import { ILikePostBody } from '../interfaces/like';
import ServerCommunicator from './ServerCommunicator';
import { ILogin } from '../interfaces/user';
import Login from '../request/Login';



class ServerFacade {
    static post = 'post'
    static user = 'user'
    static like = 'like'

	// GET
	static async getPostsList<T>(): Promise<AxiosResponse<T>> {
        
		const urlPath = `${this.post}/list/posts`;

		return await ServerCommunicator.doGetRequest<T>(urlPath);
	}

    //GET
    static async getComments<T>(postId: string): Promise<AxiosResponse<T>> {

		const urlPath = `${this.post}/${postId}`;

		return await ServerCommunicator.doGetRequest<T>(urlPath);
	}

	//POST
	static async userLogin<T>(login: Login) : Promise<AxiosResponse<T>> {

		const urlPath = `${this.user}/log-in`;
		const data = { email: login.email, password: login.password }

		return await ServerCommunicator.doPostRequest<T, ILogin>(urlPath, data);
	}

	// POST
	static async likePost<T>(body: ILikePostBody) : Promise<AxiosResponse<T>> {

		const urlPath = `${this.like}/`;

		return await ServerCommunicator.doPostRequest<T, ILikePostBody>(urlPath, body);
	}

	// DELETE
	static async unlikePost<T>(param : number) : Promise<AxiosResponse<T>> {

		const urlPath = `${this.like}/${param}`;

		return await ServerCommunicator.doDeleteRequest<T>(urlPath);
	}


}

export default ServerFacade;
