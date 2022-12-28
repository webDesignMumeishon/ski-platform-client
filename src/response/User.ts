import Base from './Base';
import {IUserLogged} from '../interfaces/user'

export class User extends Base implements IUserLogged{
    private _firstName: string
    private _lastName: string
    private _email: string
    private _p_enabled: boolean

    constructor(
        code: number, 
        success: boolean, 
        message: string,
        firstName: string,
        lastName: string,
        email: string,
        p_enabled: boolean
    ){
        super(code, success, message)
        this._firstName = firstName
        this._lastName = lastName
        this._email = email
        this._p_enabled = p_enabled
    }

    get firstName() : string {
        return this._firstName
    }

    get lastName() : string {
        return this._lastName
    }

    get email() : string {
        return this._email
    }

    get p_enabled() : boolean {
        return this._p_enabled
    }
}

