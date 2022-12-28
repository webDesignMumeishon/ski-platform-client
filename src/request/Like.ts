import { ILikeRequest } from "../interfaces/like"

export class LikeRequest implements ILikeRequest{
    private _postId : number

    constructor(postId: number){
        this._postId = postId
    }

    get postId(){
        return this._postId
    }
}


