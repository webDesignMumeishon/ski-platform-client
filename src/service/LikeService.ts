import { AxiosResponse } from 'axios';

import ServerFacade from "../network/ServerFacade";
import LikeResponse from '../response/Like';
import {LikeRequest} from '../request/Like';

class LikeService {

	// GET
	static async likePost(postId : number) : Promise<LikeResponse> {

        const request = new LikeRequest(postId)

        return await ServerFacade.likePost(request);
	}

    //DELETE
    static async unlikePost(postId : number): Promise<AxiosResponse<string>> {

        return await ServerFacade.unlikePost<string>(postId);

	}

 
}

export default LikeService;