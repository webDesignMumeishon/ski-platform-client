import { AxiosResponse } from 'axios';
import CommentFacade from '../network/CommentFacade'
import { IComment } from "../interfaces/comments"

class CommentService {
	// GET
	static async createNewComment(postId: string, text: string): Promise<AxiosResponse<any>> {
        const bodyRequest = {postId, text}
        return await CommentFacade.createNewComment<IComment>(bodyRequest);
	}

	static async createNewReply(postId: string, text: string, parent: number): Promise<AxiosResponse<any>> {
        const bodyRequest = {postId, text, parent}
        return await CommentFacade.createNewReply<IComment>(bodyRequest);
	}
}

export default CommentService;