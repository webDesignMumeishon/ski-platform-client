class Base {
    private _code: number
    private _success: boolean
    private _message: string

    constructor(code: number, success: boolean, message: string){
        this._code = code
        this._success = success
        this._message = message
    }

    get code() : number {
        return this._code
    }

    get success() : boolean {
        return this._success
    }

    get message() : string {
        return this._message
    }
}


export default Base