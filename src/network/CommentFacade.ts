import { AxiosResponse } from 'axios';

import ServerCommunicator from './ServerCommunicator';


type body = {post_id: string, text: string}

class CommentFacade {
    static comment = 'comment'

	// GET
	static async createNewComment<T>(comment: body): Promise<AxiosResponse<T>> {
		const urlPath = `${this.comment}/`;
        const data = { post_id: comment.post_id, text: comment.text }
		const response = await ServerCommunicator.doPostRequest<body, T>(urlPath, data);
        return response
	}

}

export default CommentFacade;
