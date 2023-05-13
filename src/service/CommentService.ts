import { AxiosResponse } from 'axios';
import CommentFacade from '../network/CommentFacade'
import { IComment } from "../interfaces/comments"

class CommentService {
	// GET
	static async createNewComment(post_id: string, text: string): Promise<AxiosResponse<any>> {
        const bodyRequest = {post_id, text}
        return await CommentFacade.createNewComment<IComment>(bodyRequest);
	}
}

export default CommentService;