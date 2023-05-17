import { AxiosResponse } from 'axios';

import ServerCommunicator from './ServerCommunicator';


type body = {postId: string, text: string}

type bodyReply = {postId: string, text: string, parent: number}

class CommentFacade {
    static comment = 'comment'

	// POST
	static async createNewComment<T>(comment: body): Promise<AxiosResponse<T>> {
		const urlPath = `${this.comment}/`;
        const data = { postId: comment.postId, text: comment.text }
		const response = await ServerCommunicator.doPostRequest<body, T>(urlPath, data);
        return response
	}

	// POST
	static async createNewReply<T>(comment: bodyReply): Promise<AxiosResponse<T>> {
		const urlPath = `${this.comment}/`;
        const data = { postId: comment.postId, text: comment.text, parent: comment.parent }
		const response = await ServerCommunicator.doPostRequest<bodyReply, T>(urlPath, data);
        return response
	}

}

export default CommentFacade;
