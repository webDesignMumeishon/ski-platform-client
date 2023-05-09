
import {TResortRequest} from '../interfaces/resort'

export class ResortRequest implements TResortRequest{
    private _state : string
    private _town : string

    constructor(state : string, town: string){
        this._state = state
        this._town = town
    }

    get state(){
        return this._state
    }

    get town(){
        return this._town
    }
}