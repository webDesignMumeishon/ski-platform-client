import {IPostListRequest} from '../interfaces/post'

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


