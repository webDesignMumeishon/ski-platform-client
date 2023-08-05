import { AxiosResponse } from 'axios';

import ServerCommunicator from './ServerCommunicator';
import { ILogin, IUser } from '../interfaces/user';
import { IPostListRequest } from '../interfaces/post';
import Login from '../request/Login';
import LikeResponse from '../response/Like';
import {LikeRequest} from '../request/Like';
import { ILikeRequest } from '../interfaces/like';
import { User } from '../response/User';
import Message from '../eums/Message';
import { PostListRequest, SinglePostRequest } from '../request/Post';
// Resort
import { ResortRequest } from '../request/Resort';


class ServerFacade {
    static post = 'post'
    static user = 'user'
    static like = 'like'
    static resort = 'resort'

	// GET
	static async getPostsList<T>(post: PostListRequest): Promise<AxiosResponse<T>> {
        
		const urlPath = `${this.post}/list/posts`;

		const queryParams = { town: post.town, state: post.state }

		return await ServerCommunicator.doGetRequest<T, IPostListRequest>(urlPath, queryParams);
	}

	// GET
	static async searchByKeyword<T>(keyword: string): Promise<AxiosResponse<T>> {
		const urlPath = `${this.resort}/search`;
		const queryParams = {keyword: keyword}
		return await ServerCommunicator.doGetRequest<T, {keyword: string}>(urlPath, queryParams);
	}

	static async getSinglePost<T>(post: SinglePostRequest): Promise<AxiosResponse<T>> {
		const urlPath = `${this.post}/single/${post.id}`;
		return await ServerCommunicator.doGetRequest<T, IPostListRequest>(urlPath);
	}

    //GET
    static async getComments<T>(postId: string): Promise<AxiosResponse<T>> {
		const urlPath = `${this.post}/${postId}`;
		return await ServerCommunicator.doGetRequest<T>(urlPath);
	}

	//POST
	static async userLogin(login: Login) : Promise<User> {

		const urlPath = `${this.user}/log-in`;
		const data = { email: login.email, password: login.password }

		try{
			const response = await ServerCommunicator.doPostRequest<ILogin, IUser>(urlPath, data);
			return new User(
				response.status, 
				true, 
				Message.SUCCESS, 
				response.data.firstName, 
				response.data.lastName,
				response.data.email,
				response.data.p_enabled
			)

		}catch(error){
			return new User(
				500, 
				false, 
				Message.ERROR, 
				"", 
				"",
				"",
				false
			)
		}
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
			// console.error(error)
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

	static async getResortReport<T>(params : ResortRequest) : Promise<AxiosResponse<T>> {

		const urlPath = `${this.resort}/report`;

		const queryParams = {state: params.state, town: params.town}

		return await ServerCommunicator.doGetRequest<T>(urlPath, queryParams);
	}

	static async getResort<T>(params : ResortRequest) : Promise<AxiosResponse<T>> {

		const urlPath = `${this.resort}/one`;

		const queryParams = {state: params.state, town: params.town}

		return await ServerCommunicator.doGetRequest<T>(urlPath, queryParams);
	}


}

export default ServerFacade;
