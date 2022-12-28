import Base from './Base';

class LikeResponse extends Base{
    constructor(code: number, success: boolean, message: string){
        super(code, success, message)
    }
}

export default LikeResponse