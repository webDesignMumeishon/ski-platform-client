import { AxiosResponse } from 'axios';
import CommentFacade from '../network/CommentFacade'
import { IComment } from "../interfaces/comments"

class CommentService {
	// GET
	static async createNewComment(postId: string, text: string): Promise<AxiosResponse<any>> {
        const bodyRequest = {postId, text}
        return await CommentFacade.createNewComment<IComment>(bodyRequest);
	}
}

export default CommentService;