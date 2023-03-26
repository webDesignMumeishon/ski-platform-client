import {IPostListRequest, ISinglePostRequest} from '../interfaces/post'

export class PostListRequest implements IPostListRequest{
    private _town : string
    private _state: string

    constructor(town : string, state: string){
        this._town = town
        this._state = state
    }

    get town(){
        return this._town
    }

    get state(){
        return this._state
    }
}

export class SinglePostRequest implements ISinglePostRequest{
    private _id : string

    constructor(id : string){
        this._id = id
    }

    get id(){
        return this._id
    }
}


