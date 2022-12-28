import { AxiosResponse } from 'axios';

import ServerCommunicator from './ServerCommunicator';
import { ILogin } from '../interfaces/user';
import Login from '../request/Login';
import LikeResponse from '../response/Like';
import {LikeRequest} from '../request/Like';
import { ILikeRequest } from '../interfaces/like';


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
	static async userLogin<ResponseType>(login: Login) : Promise<AxiosResponse<ResponseType>> {

		const urlPath = `${this.user}/log-in`;
		const data = { email: login.email, password: login.password }

		return await ServerCommunicator.doPostRequest<ILogin, any>(urlPath, data);
	}

	// POST
	static async likePost<ResponseType>(request: LikeRequest) : Promise<LikeResponse> {

		const urlPath = `${this.like}/`;
		const body = {postId: request.postId}

		try{
			const response = await ServerCommunicator.doPostRequest<ILikeRequest, ResponseType>(urlPath, body);

			return new LikeResponse(
				response.status,
				true,
				'Success'
			)

		}
		catch(error){
			console.error(error)
			return new LikeResponse(
				500,
				false,
				'Success'
			)
		}
	}

	// DELETE
	static async unlikePost<T>(param : number) : Promise<AxiosResponse<T>> {

		const urlPath = `${this.like}/${param}`;

		return await ServerCommunicator.doDeleteRequest<T>(urlPath);
	}


}

export default ServerFacade;
