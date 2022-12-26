import { AxiosResponse } from 'axios';

import ServerFacade from "../network/ServerFacade";

class LikeService {

	// GET
	static async likePost(postId : number): Promise<AxiosResponse<string>> {
        const postLike = {
            postId
        }
        return await ServerFacade.likePost<string>(postLike);
	}

    //DELETE
    static async unlikePost(postId : number): Promise<AxiosResponse<string>> {

        return await ServerFacade.unlikePost<string>(postId);

	}

 
}

export default LikeService;