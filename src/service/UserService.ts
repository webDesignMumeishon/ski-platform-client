import { AxiosResponse } from 'axios';

import ServerFacade from "../network/ServerFacade";
import Login from '../request/Login';
import { IUserLogged } from '../interfaces/user';

class UserService {

	// GET
	static async userLogin(): Promise<AxiosResponse<IUserLogged>> {

        const login = new Login('tomas@mail.com', '123455')

        return await ServerFacade.userLogin<IUserLogged>(login);
	}

 
}

export default UserService;