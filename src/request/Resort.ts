
export class ResortReportRequest{
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