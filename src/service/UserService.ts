import { AxiosResponse } from 'axios';

import ServerFacade from "../network/ServerFacade";
import { IUserLogged } from '../interfaces/user';

class UserService {

	// GET
	static async userLogin(): Promise<AxiosResponse<IUserLogged>> {

        const userBody = {
            email: "tomas@mail.com",
            password: "123455"
        }

        return await ServerFacade.userLogin(userBody);
	}

 
}

export default UserService;