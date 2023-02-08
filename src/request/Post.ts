import {IPostListRequest, ISinglePostRequest} from '../interfaces/post'

export class PostListRequest implements IPostListRequest{
    private _city : string
    private _state: string

    constructor(city : string, state: string){
        this._city = city
        this._state = state
    }

    get city(){
        return this._city
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


